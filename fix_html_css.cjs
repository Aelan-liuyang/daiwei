const fs = require('fs');
const path = require('path');

const files = [
  'Products.vue',
  'ProductDetail.vue',
  'Cases.vue',
  'CasesDetail.vue',
  'News.vue',
  'NewsDetail.vue',
  'Contact.vue',
  'About.vue'
];

const dir = '/Volumes/T7/岱威/daiwei/src/views/home/';

files.forEach(fileName => {
  const file = path.join(dir, fileName);
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');

  // Remove banner image and particles
  content = content.replace(/<img[^>]+class="banner-bg-img"[^>]*>/g, '');
  content = content.replace(/<div class="banner-particles"><\/div>/g, '');
  content = content.replace(/<div class="banner-bg-overlay"><\/div>/g, '');

  // Fix img-wrap background which was turned to #1d1d1f by previous script
  content = content.replace(/\.img-wrap \{\s*position: relative;\s*width: 100%;\s*aspect-ratio: 1\.2 \/ 1;\s*background: #1d1d1f;/g, 
  '.img-wrap {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1.2 / 1;\n  background: #fbfbfd;');

  content = content.replace(/\.product-gallery-grid\.list \.img-wrap \{\s*width: 200px;\s*flex-shrink: 0;\s*background: #1d1d1f;/g,
  '.product-gallery-grid.list .img-wrap {\n  width: 200px;\n  flex-shrink: 0;\n  background: #fbfbfd;');
  
  // Actually, let's just do a blanket replace for .img-wrap background in <style>
  const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    let styleContent = styleMatch[1];
    
    // We want the banner to have a solid dark background #1d1d1f
    styleContent = styleContent.replace(/\.products-banner \{([^}]+)\}/g, (match, inner) => {
      if (!inner.includes('background:')) {
        return `.products-banner {${inner}  background: #1d1d1f;\n}`;
      }
      return match;
    });
    styleContent = styleContent.replace(/\.cases-banner \{([^}]+)\}/g, (match, inner) => {
      if (!inner.includes('background:')) {
        return `.cases-banner {${inner}  background: #1d1d1f;\n}`;
      }
      return match;
    });
    styleContent = styleContent.replace(/\.news-banner \{([^}]+)\}/g, (match, inner) => {
      if (!inner.includes('background:')) {
        return `.news-banner {${inner}  background: #1d1d1f;\n}`;
      }
      return match;
    });
    styleContent = styleContent.replace(/\.contact-banner \{([^}]+)\}/g, (match, inner) => {
      if (!inner.includes('background:')) {
        return `.contact-banner {${inner}  background: #1d1d1f;\n}`;
      }
      return match;
    });
    styleContent = styleContent.replace(/\.about-banner \{([^}]+)\}/g, (match, inner) => {
      if (!inner.includes('background:')) {
        return `.about-banner {${inner}  background: #1d1d1f;\n}`;
      }
      return match;
    });

    // Fix any .img-wrap that got #1d1d1f by mistake
    styleContent = styleContent.replace(/\.img-wrap \{([^}]+)background:\s*#1d1d1f;/g, '.img-wrap {$1background: #fbfbfd;');
    
    content = content.replace(styleMatch[1], styleContent);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Cleaned HTML and fixed CSS for ${fileName}`);
});
