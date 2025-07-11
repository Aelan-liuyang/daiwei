// 产品数据管理
import chenci from '@/assets/images/chenci.jpg'
import chenjiao from '@/assets/images/chenjiao.jpg'
import daibeibao from '@/assets/images/daibeibao.jpg'
import daituo from '@/assets/images/daituo.jpg'
import duihan from '@/assets/images/duihan.jpg'
import gangsu from '@/assets/images/gangsu.jpg'
import gaonai from '@/assets/images/gaonai.png'
import guijia1 from '@/assets/images/guijia1.jpg'
import guijia2 from '@/assets/images/guijia2.jpg'
import jusi from '@/assets/images/jusi.jpg'
import penzui from '@/assets/images/penzui.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import tanhua from '@/assets/images/tanhua.jpg'
import tanhuada from '@/assets/images/tanhuada.jpg'
import tanhuaduo from '@/assets/images/tanhuaduo.jpg'
import tanhuaguan from '@/assets/images/tanhuaguan.jpg'
import tanhuahe from '@/assets/images/tanhuahe.jpg'
import tanhuayi from '@/assets/images/tanhuayi.jpg'
import tanhuazhi from '@/assets/images/tanhuazhi.jpg'
import taoci from '@/assets/images/taoci.jpg'
import taocifu from '@/assets/images/taocifu.png'
import taocinai from '@/assets/images/taocinai.jpg'
import taociwan from '@/assets/images/taociwan.jpg'
import xiangjiao from '@/assets/images/xiangjiao.jpg'
import zhenkong from '@/assets/images/zhenkong.jpg'
import zuran1 from '@/assets/images/zuran1.jpg'
import zuran2 from '@/assets/images/zuran2.jpg'

// 导入products目录下的真空皮带脱水机图片
import product1 from '@/assets/images/products/product-1.jpg'
import product10 from '@/assets/images/products/product-10.jpg'
import product11 from '@/assets/images/products/product-11.jpg'
import product12 from '@/assets/images/products/product-12.jpg'
import product13 from '@/assets/images/products/product-13.jpg'
import product14 from '@/assets/images/products/product-14.jpg'
import product15 from '@/assets/images/products/product-15.jpg'
import product16 from '@/assets/images/products/product-16.jpg'
import product17 from '@/assets/images/products/product-17.jpg'
import product18 from '@/assets/images/products/product-18.jpg'
import product19 from '@/assets/images/products/product-19.jpg'
import product20 from '@/assets/images/products/product-20.jpg'
import product21 from '@/assets/images/products/product-21.jpg'
import product22 from '@/assets/images/products/product-22.jpg'
import product23 from '@/assets/images/products/product-23.jpg'
import product24 from '@/assets/images/products/product-24.jpg'
import product25 from '@/assets/images/products/product-25.jpg'
import product26 from '@/assets/images/products/product-26.jpg'
import product27 from '@/assets/images/products/product-27.jpg'

import product3 from '@/assets/images/products/product-3.jpg'
import product4 from '@/assets/images/products/product-4.jpg'
import product5 from '@/assets/images/products/product-5.jpg'
import product6 from '@/assets/images/products/product-6.jpg'
import product7 from '@/assets/images/products/product-7.jpg'
import product8 from '@/assets/images/products/product-8.jpg'
import product9 from '@/assets/images/products/product-9.jpg'

// 产品分类
export const categories = [
  '碳化硅聚合陶瓷管',
  '反应阻燃型-碳化硅聚合陶瓷涂抹',
  '双金属耐磨管',
  '陶瓷内衬复合钢管',
  '陶瓷贴片耐磨管',
  '龟甲网耐磨陶瓷管'
]

// 所有产品数据
export const allProductList = [
  // 碳化硅聚合陶瓷管系列
  {
    id: 1,
    category: '碳化硅聚合陶瓷管',
    img: zhenkong,
    title: '真空皮带脱水机及配件',
    description: '专业的真空皮带脱水机配件，适用于各种工业脱水场景，具有高效、耐用的特点。',
    code: 'ZKPD-727',
    publishDate: new Date('2020-12-03'),
    tags: ['真空皮带脱水机', '真空皮带脱水机配件', '真空皮带脱水机应用'],
    detailContent: `
      <p><strong>真空皮带脱水机</strong>，以<strong>滤布</strong>为过滤介质，利用物料重力和<em>真空吸力</em>实现固液分离的<span class="highlight-keyword">效率高</span>的固液分离设备。</p>

      <h2><strong>工作原理</strong></h2>
      <p>该设备采用<strong>固定真空盒</strong>，<strong>滤布</strong>铺敷在<strong>环形胶带</strong>上，环形<strong>胶带</strong>由减速机拖动在真空盒上连续运行，<strong>胶带</strong>与真空盒滑台上的摩擦带接触并形成<em>水密封结构</em>。料浆由下料斗，均匀的布在<strong>滤布</strong>上。当真空室接通真空系统时，在<strong>胶带</strong>上形成<span class="highlight-keyword">真空抽滤区</span>，滤液穿过<strong>滤布</strong>经<strong>胶带</strong>上的横沟槽汇总并由小孔进入真空室，固体颗粒被截留在<strong>滤布</strong>上形成<em>滤饼</em>。</p>

      <p>进入真空室的滤液经排液罐排出，随着橡胶带的移动，一形成的滤饼依次进入<strong>滤饼洗涤区</strong>和<strong>洗干区</strong>，然后<strong>滤布</strong>和<strong>胶带</strong>分开，在<strong>卸料辊</strong>处将滤饼卸出(进入<strong>卸料区</strong>)。卸除滤饼的<strong>滤布</strong>经清洗后获得再生，在经过一组<strong>支承辊</strong>和<strong>纠偏装置</strong>后重新进入过滤区，然后再进入下一个过滤周期。</p>

      <h2><strong>设备特点</strong></h2>
      <ul>
        <li>●在结构上实现<span class="highlight-keyword">模块化设计</span>，组装灵活，运输方便。也可安装调试完毕后，在整体吊装运输。</li>
        <li>●在过滤上实现了<strong>滤布</strong>与<strong>胶带</strong><em>同步运行</em>，能够连续完成进料、抽滤、洗涤、干燥、<strong>滤布</strong>再生等功能。</li>
        <li>●在控制上实现<span class="highlight-keyword">远程与现场交互控制</span>的方式，便于实施操作。</li>
        <li>●在<strong>胶带</strong>支承上实现了<em>托辊式、气垫式、托盘式、多条摩擦带支撑</em>的多种方式减少摩擦阻力，增加<strong>胶带</strong>寿命。</li>
        <li>●在洗涤上实现了<span class="highlight-keyword">分段收集</span>，并可顺流或逆流洗涤。</li>
        <li>●在<strong>滤布</strong>再生上可选配<em>高压清洗方式</em>增加<strong>滤布</strong>的再生效果及寿命。</li>
        <li>●在排液方式上有<span class="tech-param">零位排液、高位排液、辅助排液</span>。</li>
        <li>●在设备外形上增加了气罩或铝塑窗实现了<span class="highlight-keyword">半封闭或全封闭</span>，用于含挥发性气体或蒸汽的物料处理。</li>
      </ul>

      <h2><strong>设备主要配件</strong></h2>

      <h3><strong>滤布</strong></h3>
      <p><span class="industry-highlight">烟气脱硫</span>中真空皮带脱水机的<strong>滤布</strong>，具有<em>抗拉强度大、耐磨、耐酸碱性、易剥离、滤水性能好</em>等特点，特别是独特的接头、封边、制作工艺，能提高<strong>滤布</strong>的使用寿命。公司代理各种型号进口，国产<strong>滤布</strong>。</p>
      <p><strong>规格：</strong>宽度为<span class="tech-param">4.5米以内</span>、长度不限。</p>

      <h3><strong>橡胶棍</strong></h3>
      <p>真空皮带脱水机的<strong>主、从动棍</strong>，是驱动皮带运动的部件，由钢质滚筒外包<em>耐酸碱橡胶</em>制成。</p>
      <p><strong>规格：</strong><span class="tech-param">500、820、1000、1200、1400</span>等各种规格尺寸。</p>

      <h3><strong>胶带</strong></h3>
      <p><strong>橡胶过滤带</strong>也称<strong>真空皮带</strong>，是DU水平带式真空脱水机的<span class="highlight-keyword">关键部件</span>。带体表面为一排排横向沟槽，沟槽中有一排或多排排液孔，排液孔段可采用<em>纯胶结构</em>；带体的骨架层采用<strong>高强度的聚酯帆布或绦纶帆布</strong>，<strong>滤布</strong>的上、下覆盖胶可根据工况条件采用不同的配方，满足<span class="tech-param">耐酸碱、耐热、耐油、耐寒</span>等不同需求；<strong>胶带</strong>的成型和硫化采用<span class="highlight-keyword">一次整体复合工艺</span>，确保了带体的平整和性能的稳定。</p>

      <h3><strong>喷嘴</strong></h3>
      <p><strong>喷嘴</strong>的功效：采用<em>工艺水喷射</em>，清洗<strong>滤布</strong>和<strong>胶带</strong>，且配置有真空吸管密封的箱体，这样可以保证<span class="highlight-keyword">清洁的工作现场</span>。<strong>喷嘴</strong>采用<strong>国际喷雾公司</strong>的产品，可以充分保证清洗效果。</p>

      <h3><strong>旋流器</strong></h3>
      <p><strong>旋流器</strong>采用<em>新型耐磨、耐腐材料</em>制作，设计结构合理，能有效提高<strong>旋流器</strong>的寿命和处理效果。具有<span class="highlight-keyword">浓缩效果好、分级效率高、耐酸碱腐蚀性强、使用寿命长</span>等特点。</p>

      <h3><strong>纠偏总成</strong></h3>
      <p>采用<em>气缸或气囊推动</em><strong>纠偏总成</strong>转一定角度来自动纠正<strong>滤布</strong>的偏移，保证<strong>滤布</strong>的<span class="highlight-keyword">正常运转</span>。</p>
    `,
    images: [zhenkong, product1, product3, product4]
  },
  {
    id: 2,
    category: '碳化硅聚合陶瓷管',
    img: duihan,
    title: '堆焊耐磨衬板管件',
    description: '采用堆焊工艺制造的耐磨衬板管件，具有优异的耐磨性能和长使用寿命。',
    code: 'DHNM-726',
    publishDate: new Date('2020-12-03'),
    tags: ['堆焊耐磨', '衬板管件', '耐磨管道'],
    detailContent: `
      <p><strong>堆焊耐磨衬板管件</strong>采用先进的堆焊工艺制造，在普通钢管内壁堆焊耐磨合金层，具有优异的耐磨性能。</p>

      <h2>产品特点</h2>
      <ul>
        <li>堆焊层硬度高，耐磨性能优异</li>
        <li>基体强度高，承压能力强</li>
        <li>制造工艺成熟，质量稳定可靠</li>
        <li>成本相对较低，性价比高</li>
      </ul>

      <h2>应用领域</h2>
      <p>广泛应用于电力、冶金、矿山、化工等行业的物料输送系统，特别适用于输送磨蚀性较强的物料。</p>

      <h2>技术参数</h2>
      <p>堆焊层硬度：HRC58-65<br>
      堆焊层厚度：6-20mm<br>
      工作温度：-20°C ~ +400°C<br>
      适用压力：≤2.5MPa</p>
    `,
    images: [duihan]
  },
  {
    id: 3,
    category: '碳化硅聚合陶瓷管',
    img: xiangjiao,
    title: '橡胶膨胀节',
    description: '高品质橡胶膨胀节，用于管道系统的热胀冷缩补偿，具有良好的密封性能。',
    code: 'XJPZ-725',
    publishDate: new Date('2020-12-03'),
    tags: ['橡胶膨胀节', '管道补偿', '密封件'],
    detailContent: `
      <p><strong>橡胶膨胀节</strong>是管道系统中的<span class="highlight-keyword">重要补偿元件</span>，用于吸收管道的<em>热胀冷缩、振动和位移</em>。</p>

      <h2><strong>产品优势</strong></h2>
      <ul>
        <li>●<span class="highlight-keyword">补偿能力强</span>，能够吸收<em>轴向、横向和角向位移</em></li>
        <li>●<span class="highlight-keyword">密封性能好</span>，无泄漏</li>
        <li>●<span class="tech-param">耐温范围广</span>，适应性强</li>
        <li>●<em>安装维护方便</em></li>
        <li>●<strong>耐腐蚀性能</strong>优异，使用寿命长</li>
        <li>●<strong>减震降噪</strong>效果显著</li>
      </ul>

      <h2><strong>技术参数</strong></h2>
      <p><strong>工作温度：</strong><span class="tech-param">-40°C ~ +120°C</span></p>
      <p><strong>工作压力：</strong><span class="tech-param">0.25 ~ 2.5MPa</span></p>
      <p><strong>补偿量：</strong><span class="tech-param">±10 ~ ±50mm</span></p>
      <p><strong>连接方式：</strong><strong>法兰连接</strong></p>
      <p><strong>材质：</strong><em>天然橡胶、氯丁橡胶、丁基橡胶</em>等</p>

      <h2><strong>应用场合</strong></h2>
      <p>●<strong>供热系统</strong>：<strong>热水管道</strong>、<strong>蒸汽管道</strong>、<strong>采暖系统</strong></p>
      <p>●<strong>供水系统</strong>：<strong>给水管道</strong>、<strong>排水管道</strong>、<strong>消防管道</strong></p>
      <p>●<strong>化工系统</strong>：<strong>化工管道</strong>、<strong>酸碱管道</strong>、<strong>腐蚀性介质管道</strong></p>
      <p>●<strong>冶金系统</strong>：<strong>冷却水管道</strong>、<strong>工艺管道</strong>、<strong>高温管道</strong></p>

      <p>特别适用于有<em>温度变化和振动</em>的场合，能够有效保护管道系统，延长使用寿命。</p>
    `,
    images: [xiangjiao]
  },
  {
    id: 4,
    category: '碳化硅聚合陶瓷管',
    img: penzui,
    title: '烧结碳化硅陶瓷管件·喷嘴',
    description: '烧结碳化硅陶瓷制造的管件和喷嘴，具有优异的耐高温和耐腐蚀性能。',
    code: 'SJTH-724',
    publishDate: new Date('2020-12-02'),
    tags: ['烧结碳化硅', '陶瓷喷嘴', '高温管件'],
    detailContent: `
      <p><strong>反应烧结碳化硅制品</strong>具有<em>高强度、高硬度、高耐磨</em>、<span class="tech-param">耐高温、耐腐蚀、抗热震</span>、导热好、<span class="highlight-keyword">耐极冷急热</span>和<span class="highlight-keyword">抗高温蠕变</span>等优异性能和主要特点。可制成<span class="industry-highlight">耐腐蚀件、耐磨件、脱硫喷嘴</span>、耐腐蚀件及各种<strong>异型结构件</strong>等。</p>

      <h2><strong>产品规格</strong></h2>
      <p>提供<span class="tech-param">DN400及以下</span><strong>烧结碳化硅陶瓷管件</strong>及<span class="industry-highlight">脱硫</span>用各种<strong>喷嘴</strong>。</p>

      <h2><strong>产品特性</strong></h2>
      <ul>
        <li>●<span class="highlight-keyword">高强度、高硬度</span>，机械性能优异</li>
        <li>●<span class="highlight-keyword">高耐磨性能</span>，使用寿命长</li>
        <li>●<span class="tech-param">耐高温性能突出</span>，可在<em>极端温度</em>下工作</li>
        <li>●<span class="tech-param">耐腐蚀性强</span>，适用于恶劣化学环境</li>
        <li>●<span class="highlight-keyword">抗热震性能好</span>，温度急变不开裂</li>
        <li>●<span class="highlight-keyword">导热性能优良</span>，热传导效率高</li>
        <li>●<span class="tech-param">耐极冷急热</span>，温度适应范围广</li>
        <li>●<span class="highlight-keyword">抗高温蠕变</span>，长期高温下形状稳定</li>
      </ul>

      <h2><strong>主要应用</strong></h2>
      <p>●<strong>脱硫系统</strong>：<strong>脱硫喷嘴</strong>、<strong>脱硫管道</strong>、<strong>脱硫塔内件</strong></p>
      <p>●<strong>化工设备</strong>：<strong>耐腐蚀管件</strong>、<strong>化工泵部件</strong>、<strong>反应器内衬</strong></p>
      <p>●<strong>冶金工业</strong>：<strong>高温管道</strong>、<strong>耐磨衬板</strong>、<strong>冶炼设备部件</strong></p>
      <p>●<strong>电力行业</strong>：<strong>锅炉管道</strong>、<strong>除尘设备</strong>、<strong>烟气处理系统</strong></p>

      <h2><strong>产品优势</strong></h2>
      <p>采用<strong>反应烧结工艺</strong>制造，确保产品具有<span class="highlight-keyword">优异的综合性能</span>，能够在<em>极端工况</em>下稳定工作，是传统材料的<span class="highlight-keyword">理想替代品</span>。特别适用于制造<strong>耐腐蚀件</strong>、<strong>耐磨部件</strong>、<strong>脱硫喷嘴</strong>等关键组件。</p>
    `,
    images: [penzui]
  },
  {
    id: 5,
    category: '碳化硅聚合陶瓷管',
    img: jusi,
    title: '聚四氟内衬管件',
    description: '聚四氟乙烯内衬管件，具有优异的耐腐蚀性能，适用于化工行业。',
    code: 'JSFL-723',
    publishDate: new Date('2020-12-02'),
    tags: ['聚四氟内衬', '耐腐蚀管件', '化工管道'],
    detailContent: `
      <p><strong>聚四氟乙烯(PTFE、 F4)</strong>是耐腐蚀性能十分突出，管道及配件有"塑料王”的美誉。具有优异的耐温性能和耐腐蚀性能，是理想的硝酸、氯气、王水、混酸、溴化物等有机溶剂等强腐蚀性介质的输送介质。密度: 2.10-2.30g/cm3 ，拉伸强度: 218MPa、广泛应用于化工、电力、离子膜烧碱等各种需要抗酸碱和有机溶剂的介质。</p>

      <h2>产品优势</h2>
      <ul>
        <li>耐强酸强碱，化学稳定性极佳</li>
        <li>不粘性好，流体阻力小</li>
        <li>耐温范围广，-200°C ~ +260°C</li>
        <li>使用寿命长，维护成本低</li>
      </ul>

      <h2>应用场合</h2>
      <p>广泛应用于化工、制药、食品等行业的强腐蚀性介质输送系统。</p>
    `,
    images: [jusi]
  },
  {
    id: 6,
    category: '碳化硅聚合陶瓷管',
    img: gangsu,
    title: '钢塑复合管件',
    description: '钢塑复合结构管件，结合了钢材的强度和塑料的耐腐蚀性。',
    code: 'GSFH-722',
    publishDate: new Date('2020-12-02'),
    tags: ['钢塑复合', '复合管件', '耐腐蚀'],
    detailContent: `
      <p><strong>钢塑复合管件</strong>一般选用碳钢管件为基体, 内衬耐腐蚀、耐热性能的聚乙烯(PE)、 聚丙烯 (PP、 PO)衬里材料,化学稳定性优良。整体一次成型， 内壁光滑,强度高、抗老化、不渗漏、无毒性。对- -般酸、碱、盐及有机溶剂的耐腐蚀性能良好，适用于腐蚀性气体、液体及浆液介质的输送。</p>

      <h2>结构特点</h2>
      <ul>
        <li>外层钢材提供机械强度</li>
        <li>内层塑料提供耐腐蚀保护</li>
        <li>复合结构，性能互补</li>
        <li>连接可靠，密封性好</li>
      </ul>

      <h2>技术优势</h2>
      <p>具有钢管的强度和塑料管的耐腐蚀性，是传统管材的理想替代品。</p>
    `,
    images: [gangsu, product5]
  },
  {
    id: 7,
    category: '碳化硅聚合陶瓷管',
    img: chenjiao,
    title: '衬胶管件',
    description: '内衬橡胶的管件产品，具有良好的耐磨和减震性能。',
    code: 'CJGJ-721',
    publishDate: new Date('2020-12-02'),
    tags: ['衬胶管件', '耐磨管道', '减震管件'],
    detailContent: `
      <p><strong>衬胶管件</strong>内衬优质橡胶材料，具有良好的耐磨和减震性能。</p>

      <h2>产品特性</h2>
      <ul>
        <li>耐磨性能好，使用寿命长</li>
        <li>减震效果佳，降低噪音</li>
        <li>弹性好，适应管道变形</li>
        <li>安装方便，维护简单</li>
      </ul>

      <h2>适用范围</h2>
      <p>适用于输送磨蚀性物料和有振动要求的管道系统。</p>
    `,
    images: [chenjiao, product6]
  },
  {
    id: 8,
    category: '碳化硅聚合陶瓷管',
    img: tanhua,
    title: '碳化硅聚合陶瓷直管',
    description: '碳化硅聚合陶瓷制造的直管，具有优异的耐磨性和耐腐蚀性。',
    code: 'THJH-720',
    publishDate: new Date('2020-12-02'),
    tags: ['碳化硅直管', '聚合陶瓷', '耐磨直管'],
    detailContent: `
      <p><strong>碳化硅聚合陶瓷直管</strong>采用先进的聚合工艺制造，具有优异的耐磨性和耐腐蚀性。</p>

      <h2>技术特点</h2>
      <ul>
        <li>碳化硅聚合技术，强度高</li>
        <li>耐磨性能优异，寿命长</li>
        <li>耐高温耐腐蚀，适应性强</li>
        <li>内壁光滑，流体阻力小</li>
      </ul>

      <h2>应用优势</h2>
      <p>是传统金属管道的理想替代品，特别适用于高磨损、高腐蚀的工况环境。</p>
    `,
    images: [tanhua, product19, product20]
  },
  {
    id: 9,
    category: '碳化硅聚合陶瓷管',
    img: chenci,
    title: '衬瓷弯管',
    description: '内衬陶瓷的弯管产品，适用于高磨损工况下的管道系统。',
    code: 'CCWG-719',
    publishDate: new Date('2020-12-02'),
    tags: ['衬瓷弯管', '陶瓷内衬', '耐磨弯头'],
    detailContent: `
      <p><strong>衬瓷弯管</strong>内衬高品质陶瓷材料，适用于高磨损工况下的管道系统。</p>

      <h2>产品优势</h2>
      <ul>
        <li>陶瓷内衬，耐磨性能卓越</li>
        <li>弯管设计，适应管路走向</li>
        <li>结构合理，流体阻力小</li>
        <li>安装便捷，维护方便</li>
      </ul>

      <h2>应用场合</h2>
      <p>广泛应用于电力、冶金、矿山等行业的磨蚀性物料输送系统的转弯部位。</p>
    `,
    images: [chenci, product17, product18]
  },
  {
    id: 10,
    category: '碳化硅聚合陶瓷管',
    img: tanhuaduo,
    title: '碳化硅聚合三（多）通',
    description: '碳化硅聚合陶瓷制造的三通和多通管件，满足复杂管路连接需求。',
    code: 'THSD-718',
    publishDate: new Date('2020-12-02'),
    tags: ['碳化硅三通', '多通管件', '管路连接'],
    detailContent: `
      <p><strong>碳化硅聚合三（多）通</strong>采用碳化硅聚合陶瓷制造，满足复杂管路连接需求。</p>

      <h2>结构特点</h2>
      <ul>
        <li>三通或多通设计，连接灵活</li>
        <li>碳化硅聚合材料，性能优异</li>
        <li>内壁光滑，流体分配均匀</li>
        <li>结构紧凑，占用空间小</li>
      </ul>

      <h2>技术优势</h2>
      <p>能够满足复杂管路系统的分流、合流需求，是管道系统的重要组成部分。</p>
    `,
    images: [tanhuaduo, tanhuaduo, tanhuaduo, tanhuaduo]
  },

  // 继续添加碳化硅聚合陶瓷管系列（11-16）
  {
    id: 11,
    category: '碳化硅聚合陶瓷管',
    img: daituo,
    title: '带托座衬瓷弯头',
    description: '带有支撑托座的衬瓷弯头，提供更好的支撑和稳定性。',
    code: 'DTCC-717',
    publishDate: new Date('2020-12-01'),
    tags: ['带托座弯头', '衬瓷弯头', '支撑托座'],
    detailContent: `
      <p><strong>带托座衬瓷弯头</strong>在传统衬瓷弯头基础上增加了支撑托座，提供更好的支撑和稳定性。</p>

      <h2>结构特点</h2>
      <ul>
        <li>托座设计，支撑稳定</li>
        <li>陶瓷内衬，耐磨性好</li>
        <li>安装方便，维护简单</li>
        <li>适应重载工况</li>
      </ul>

      <h2>应用优势</h2>
      <p>特别适用于大口径、重载荷的管道系统，能够有效分散管道重量，延长使用寿命。</p>
    `,
    images: [daituo, product15, product16]
  },
  {
    id: 12,
    category: '碳化硅聚合陶瓷管',
    img: tanhuada,
    title: '碳化硅聚合陶瓷大小头',
    description: '碳化硅聚合陶瓷制造的异径管件，用于不同管径的连接。',
    code: 'THDX-716',
    publishDate: new Date('2020-12-01'),
    tags: ['碳化硅大小头', '异径管件', '管径转换'],
    detailContent: `
      <p><strong>碳化硅聚合陶瓷大小头</strong>用于连接不同管径的管道，实现管径的平滑过渡。</p>

      <h2>产品特点</h2>
      <ul>
        <li>异径设计，管径转换平滑</li>
        <li>碳化硅材料，性能优异</li>
        <li>内壁光滑，流体阻力小</li>
        <li>结构合理，应力分布均匀</li>
      </ul>

      <h2>技术优势</h2>
      <p>能够实现不同管径管道的可靠连接，保证流体的平稳过渡，减少湍流和压力损失。</p>
    `,
    images: [tanhuada, tanhuayi, ]
  },
  {
    id: 13,
    category: '碳化硅聚合陶瓷管',
    img: tanhuahe,
    title: '碳化硅聚合陶瓷管',
    description: '高性能碳化硅聚合陶瓷管道，具有卓越的耐磨和耐腐蚀性能。',
    code: 'THJH-715',
    publishDate: new Date('2020-12-01'),
    tags: ['碳化硅管道', '聚合陶瓷', '高性能管道'],
    detailContent: `
      <p><strong>碳化硅聚合陶瓷管件</strong>，早期衬层材料以解决检修运行中，需及时现场局部修复，损坏、脱落、泄露的<strong>衬胶管件</strong>为主。</p>

      <p>该管件内衬层采用全新的<em>聚合物树脂和无机陶瓷</em>等材料，经特定工艺制备，<span class="highlight-keyword">一次成型</span>。具有<em>衬层与管件层间结合强度高、高防腐、高耐磨、耐温差大，韧性好，现场易修复</em>等优点，有效避免了可能引起的管道堵塞的不确定性因素。</p>

      <p>针对<strong>异型件</strong>易损等特点，公司结合现场多年使用情况，经全新改进设计，使用寿命比<strong>衬胶管</strong>件提升<span class="tech-param">2倍以上</span>，并申请国家专利，专利号:<span class="tech-param">202021335562.9</span>。在输送含有酸、碱、盐、污水等磨削性、腐蚀性浆液输送中，综合性能及性价比非常突出。为客户环保设备的安全运行提供良好的保障。</p>

      <h2><strong>产品特点</strong></h2>

      <h3><strong>1、层间结合强度大、耐温性广、使用安全可靠</strong></h3>
      <p><strong>复合钢管</strong>基体采用<strong>碳钢管</strong>，内衬层与基体结合强度在<span class="tech-param">15MPa以上</span>，是<strong>衬胶管件</strong>（一般为<span class="tech-param">15KPa</span>）结合强度的<span class="highlight-keyword">100倍</span>。<strong>内衬陶瓷层</strong>，化学惰性强，硬度大，韧性强。在<span class="tech-param">-40℃——200℃</span>范围内对冷热交替、干湿交替、负压、腐蚀、冲涮等工况运营环境下无变化。在环评在线实时监测设备运行期间，消除潜在生产隐患，保障设备安全运行。</p>

      <h3><strong>2、异型件经改进设计，使用寿命大幅提高</strong></h3>
      <p><strong>弯管、变径管</strong>等易损<strong>异型管件</strong>，结合多年现场实际经验，进行全新改进设计，已申请国家专利，专利号：<span class="tech-param">202021335562.9</span>。使用寿命提升<span class="highlight-keyword">2倍以上</span>，大幅降低检修维护成本，有效提升整体管线使用寿命。</p>

      <h3><strong>3、高防腐、高耐磨、防结垢、易清理</strong></h3>
      <p><strong>内衬材料</strong>均是<em>耐磨损、耐腐蚀材料</em>，形成的<strong>陶瓷层</strong>呈<span class="highlight-keyword">交替叠层结构</span>，从基础上解决了耐磨和耐腐特性。管道<strong>内衬层</strong>比较光滑，运行阻力小，易于清理，具有<span class="highlight-keyword">防结垢性能</span>，使用过程中维护实用、方便。</p>

      <h3><strong>4、法兰面采用内密封工艺，密封性好，易于安装</strong></h3>
      <p><strong>法兰密封面</strong>处经特殊处理后，<strong>内衬层</strong>翻边与<strong>法兰</strong>密封<span class="highlight-keyword">一次复合成型</span>，使<strong>法兰防腐层</strong>和密封线平齐，密封性好，并降低了运输、安装过程中磕碰对<strong>内衬层</strong>造成损伤，给安装运输带来方便。</p>

      <h3><strong>5、安装维护方便，现场可修复后直接运行，省时有效</strong></h3>
      <p>对原系统因安装角度和尺寸偏差较大，新制作管件难于现场对接，泄露损坏的<strong>异型件</strong>。原管件外壁<strong>钢管</strong>只要能满足强度要求，对局部损坏部位进行切补修复后，便可进行<strong>衬瓷</strong>施工，一般完工<span class="tech-param">2小时后</span>设备就能投入生产运行。方便快捷，省时有效。</p>

      <h3><strong>6、拆装灵活，维护方便</strong></h3>
      <p>易损部位管件采用<strong>固定法兰</strong>和<strong>松套法兰</strong>组合方式，方便安装、检修和日常维护工作，给施工人员提供更多便利。</p>

      <h2><strong>应用领域</strong></h2>
      <p>衬<strong>碳化硅聚合陶瓷管</strong><strong>钢管</strong>耐酸、碱、盐腐蚀，耐磨性能突出，耐温在<span class="tech-param">-40℃~180℃</span>之间长期运行。在<span class="industry-highlight">石油化工、纺织、电力、冶金</span>等输送腐蚀性浆液介质、<span class="industry-highlight">烟气石灰石湿法脱硫</span>、污（废）水、<span class="industry-highlight">氯碱行业</span>、耐腐蚀设备的<strong>衬层防护</strong>方面使用性能非常突出。</p>
    `,
    images: [tanhuahe, product7]
  },
  {
    id: 14,
    category: '碳化硅聚合陶瓷管',
    img: tanhuayi,
    title: '碳化硅聚合陶瓷大小头异型件',
    description: '定制化的碳化硅聚合陶瓷异型管件，满足特殊工况需求。',
    code: 'THYX-714',
    publishDate: new Date('2020-12-01'),
    tags: ['异型管件', '定制化', '特殊工况'],
    detailContent: `
      <p><strong>碳化硅聚合陶瓷大小头异型件</strong>是根据客户特殊需求定制的异型管件。</p>

      <h2>定制优势</h2>
      <ul>
        <li>个性化设计，满足特殊需求</li>
        <li>专业制造，质量保证</li>
        <li>技术支持，服务完善</li>
        <li>快速交付，响应及时</li>
      </ul>

      <h2>应用范围</h2>
      <p>广泛应用于各种特殊工况和非标准管道系统，为客户提供完整的解决方案。</p>
    `,
    images: [tanhuayi, product14,tanhuaguan,tanhuahe]
  },
  {
    id: 15,
    category: '碳化硅聚合陶瓷管',
    img: tanhuaguan,
    title: '碳化硅衬瓷管件',
    description: '碳化硅衬瓷工艺制造的管件，结合了碳化硅的优异性能。',
    code: 'THCC-713',
    publishDate: new Date('2020-12-01'),
    tags: ['碳化硅衬瓷', '复合工艺', '高性能管件'],
    detailContent: `
      <p><strong>碳化硅聚合陶瓷管</strong>综合性能超越耐磨防腐衬胶复合管。具有整体强度高、高防腐、高耐磨、高粘接强度、现场易修复、耐温性好等特点。衬层采用全新的聚合物树脂和无机陶瓷等材料经特定工艺制备，钢管内衬形成的陶瓷层结构从根本上解决了衬胶管道在运行中衬层易脱层、脱落引发的安全隐患，使用寿命成倍延长。安装施工期间调整段现场衬瓷， 节省了工期进度。</p>

      <h2>工艺特点</h2>
      <ul>
        <li>衬瓷工艺，性能卓越</li>
        <li>碳化硅材料，耐磨耐腐</li>
        <li>复合结构，优势互补</li>
        <li>制造精密，质量稳定</li>
      </ul>
      <h2>应用范围</h2>
      <p>广泛用于核电、环保、电力、冶金、化工、化肥、造纸、医药、食品、酿造等行业。是衬胶、衬塑管道、不锈钢管道、玻璃钢管道及其他管道的理想替代品。</p>
    `,
    images: [tanhuaguan, product14,tanhuahe]
  },
  {
    id: 16,
    category: '碳化硅聚合陶瓷管',
    img: tanhuazhi,
    title: '碳化硅直管',
    description: '纯碳化硅材料制造的直管产品，适用于极端工况环境。',
    code: 'THZG-712',
    publishDate: new Date('2020-12-01'),
    tags: ['碳化硅直管', '纯碳化硅', '极端工况'],
    detailContent: `
      <p><strong>碳化硅聚合陶瓷管</strong>概括功用跨越耐磨防腐衬胶复合管。具有整体强度高、高防腐、高耐磨、高粘接强度、现场易批改、耐温性好等特征。衬层选用全新的聚合物树脂和无机陶瓷等材料经特定工艺制备，钢管内衬构成的陶瓷层结构从底子上处理了衬胶管道在工作中衬层易脱层、坠落引发的危险，运用寿数成倍延伸。设备施工期间调整段现场衬瓷， 节约了工期进度。</p>

      <h2>材料优势</h2>
      <ul>
        <li>结合强度大，运用可靠</li>
        <li>高强度、高耐磨、耐性好</li>
        <li>高防腐、防结垢</li>
        <li>密封性强，耐温性好</li>
        <li>适应性强、使用尺寸广泛、现场可批改</li>
        <li>异型管件冲击部位规划加强，运用寿数延伸</li>
        <li>设备维护便当，异型件拆装更便当</li>
      </ul>

      <h2>应用领域</h2>
      <p>特别适用于高温、强腐蚀、高磨损的极端工况环境，是最高端的管道产品。</p>
    `,
    images: [tanhuazhi, product14,tanhuaguan,tanhuahe]
  },

  // 反应阻燃型-碳化硅聚合陶瓷涂抹系列
  {
    id: 17,
    category: '反应阻燃型-碳化硅聚合陶瓷涂抹',
    img: zuran1,
    title: '阻燃型碳化硅衬瓷材料',
    description: '反应阻燃型碳化硅聚合陶瓷衬层材料-适应吸收塔等部位局部修复。',
    code: 'ZRTH-711',
    publishDate: new Date('2020-11-30'),
    tags: ['阻燃材料', '碳化硅衬瓷', '高温防护'],
    detailContent: `
      <p><strong>阻燃型碳化硅衬瓷材料</strong>具有较高的耐磨性，较高的热稳定性，优良的耐腐蚀性。特别对含氯溶液或有机溶剂耐腐蚀性能较好。固化物阻燃性能氧指数在55以上，离开火焰后5-15秒，自动熄灭，具有良好的阻燃效果。</p>

      <h2>阻燃特性</h2>
      <ul>
        <li>阻燃等级高，安全性好</li>
        <li>高温稳定，不易燃烧</li>
        <li>无毒无害，环保安全</li>
        <li>耐久性好，使用寿命长</li>
      </ul>

      <h2>应用场合</h2>
      <p>广泛应用于阻燃、耐酸碱盐、耐腐蚀设备、有机溶剂及漂白性介质等的化学工程及工业中。</p>
    `,
    images: [zuran1, zuran2]
  },
  {
    id: 18,
    category: '反应阻燃型-碳化硅聚合陶瓷涂抹',
    img: zuran2,
    title: '阻燃型碳化硅陶瓷衬材',
    description: '专业的阻燃型碳化硅陶瓷衬里材料，提供优异的防火保护。',
    code: 'ZRTC-710',
    publishDate: new Date('2020-11-30'),
    tags: ['阻燃衬材', '防火保护', '陶瓷衬里'],
    detailContent: `
      <p><strong>阻燃型碳化硅陶瓷衬材</strong>是专业的防火保护材料，提供优异的防火保护。</p>

      <h2>防火性能</h2>
      <ul>
        <li>防火等级A级，安全可靠</li>
        <li>耐火温度高，保护效果好</li>
        <li>热传导率低，隔热性能佳</li>
        <li>施工方便，维护简单</li>
      </ul>

      <h2>技术优势</h2>
      <p>结合了碳化硅的优异性能和阻燃材料的防火特性，为高风险环境提供双重保护。</p>
    `,
    images: [zuran2, zuran1, ]
  },

  // 双金属耐磨管系列
  {
    id: 19,
    category: '双金属耐磨管',
    img: shuangjin,
    title: '双金属耐磨管及异形件',
    description: '双金属复合结构的耐磨管道及异形件，具有优异的耐磨性能和经济性。',
    code: 'SJNM-709',
    publishDate: new Date('2020-11-29'),
    tags: ['双金属耐磨管', '复合结构', '异形件'],
    detailContent: `
      <p><strong>双金属耐磨管</strong>以钢管为基体，内衬高耐磨合金材料，采用中频电 炉冶炼，直管通过离心浇注，异型管件采用消失模真空吸铸工艺，钢管 和内衬高耐磨合金层间形成牢固的冶金结合。双金属耐磨管充分发挥了 高铭合金的耐磨、耐腐性、耐高温、抗热冲击性和普通钢管良好的机械 强度、抗冲击性能。解决了单一材质的管道难以调和的可焊性与耐磨性 的矛盾，使两种材料性能达到较好结合。是耐磨管道体系中整体强度、 使用安全性及使用寿命等综合性比较高的较理想产品。</p>

      <h2>结构特点</h2>
      <ul>
        <li>双金属复合，性能互补，综合性能好</li>
        <li>内层耐磨，外层强度高、抗热振性能好</li>
        <li>制造工艺成熟，质量稳定、安装、运输、使用方便</li>
        <li>综合性能好、抗热振性能好、运行阻力小、受冲击部位偏心加厚设计、外形美观</li>
      </ul>

      <h2>技术参数</h2>
      <p>耐磨层硬度HRC58-65，厚度6-20mm，工作温度-20°C~+400°C，适用压力≤2.5MPa。</p>

      <h2>应用优势</h2>
      <p>是中等磨损工况的理想选择，在保证性能的同时有效控制成本。</p>
    `,
    images: [shuangjin, product8, product9]
  },

  // 陶瓷内衬复合钢管系列
  {
    id: 20,
    category: '陶瓷内衬复合钢管',
    img: taoci,
    title: '陶瓷内衬复合钢管',
    description: '陶瓷内衬复合钢管，结合了陶瓷的耐磨性和钢材的强度。',
    code: 'TCNC-708',
    publishDate: new Date('2020-11-28'),
    tags: ['陶瓷内衬', '复合钢管', '耐磨管道'],
    detailContent: `
      <p><strong>陶瓷内衬复合钢管</strong>结合了<strong>陶瓷</strong>的耐磨性和<strong>钢材</strong>的强度，是理想的<span class="highlight-keyword">耐磨管道产品</span>。</p>

      <h2><strong>复合结构</strong></h2>
      <ul>
        <li>●<strong>陶瓷内衬</strong>，耐磨性能卓越，<span class="highlight-keyword">耐磨性</span>是普通钢管的<span class="tech-param">20-30倍</span></li>
        <li>●<strong>钢管外壳</strong>，机械强度高，承压能力强</li>
        <li>●<strong>复合工艺</strong>，结合牢固，<span class="highlight-keyword">内硬外韧</span></li>
        <li>●整体性能，优势明显，<span class="highlight-keyword">性能互补</span></li>
        <li>●<strong>内壁光滑</strong>，流阻小，输送效率高</li>
        <li>●<strong>耐腐蚀性能</strong>优异，适用于多种介质</li>
      </ul>

      <h2><strong>技术指标</strong></h2>
      <p><strong>陶瓷厚度：</strong><span class="tech-param">6-20mm</span>，<strong>硬度：</strong><span class="tech-param">HRA85-88</span>，<strong>工作温度：</strong><span class="tech-param">-40°C~+700°C</span>，<strong>适用管径：</strong><span class="tech-param">DN50-DN1200</span>。</p>

      <h2><strong>应用效果</strong></h2>
      <p>使用寿命比普通钢管提升<span class="tech-param">5-10倍</span>，是<span class="highlight-keyword">高磨损输送系统</span>的首选产品。广泛应用于<span class="industry-highlight">电力、冶金、矿山、化工</span>等行业的物料输送管道系统。</p>
    `,
    images: [taoci, product10, product11, product12]
  },
  {
    id: 21,
    category: '陶瓷内衬复合钢管',
    img: taociwan,
    title: '陶瓷耐磨弯管',
    description: '陶瓷内衬的耐磨弯管，适用于高磨损的弯道输送系统。',
    code: 'TCWG-707',
    publishDate: new Date('2020-11-28'),
    tags: ['陶瓷弯管', '耐磨弯头', '弯道输送'],
    detailContent: `
      <p><strong>陶瓷耐磨弯管</strong>从内到外由陶瓷层、过渡层和钢管层组成。陶瓷层是由2600℃以上的熔融氧化铝在离心作用下，均匀渗透复合在钢管内壁上形成的致密的高耐磨层，与钢管成为一体。</p>

      <h2>设计特点</h2>
      <ul>
        <li>弯管结构，适应管路走向</li>
        <li>陶瓷内衬，耐磨性强</li>
        <li>流线设计，阻力小</li>
        <li>耐磨性好，耐温性能好、工程造价低</li>
      </ul>

      <h2>应用范围</h2>
      <p>由于该管具有耐磨、耐蚀、耐热性能，因此可广泛应用于电力、冶金、矿山、煤炭、化工等行业作为输送煤粉、精矿粉和尾矿运送、铝液等磨削性颗粒物料和腐蚀性介质，是一种理想的耐磨蚀管道。</p>
    `,
    images: [taociwan, product21]
  },
  {
    id: 22,
    category: '陶瓷内衬复合钢管',
    img: taocinai,
    title: '陶瓷耐磨直管',
    description: '陶瓷内衬的耐磨直管，提供卓越的耐磨保护。',
    code: 'TCZG-706',
    publishDate: new Date('2020-11-28'),
    tags: ['陶瓷直管', '耐磨保护', '内衬陶瓷'],
    detailContent: `
      <p><strong>陶瓷耐磨直管</strong>采用陶瓷内衬技术，提供卓越的耐磨保护。</p>

      <h2>产品特性</h2>
      <ul>
        <li>陶瓷内衬，耐磨性极佳</li>
        <li>直管设计，安装方便</li>
        <li>内壁光滑，流体阻力小</li>
        <li>使用寿命长，维护成本低</li>
      </ul>

      <h2>技术优势</h2>
      <p>是直管段耐磨保护的理想选择，广泛应用于各种磨蚀性物料的输送系统。</p>
    `,
    images: [taocinai, product22, ]
  },
  {
    id: 23,
    category: '陶瓷内衬复合钢管',
    img: daibeibao,
    title: '带背包耐磨陶瓷管件',
    description: '带有背包结构的耐磨陶瓷管件，便于安装和维护。',
    code: 'DBBG-705',
    publishDate: new Date('2020-11-27'),
    tags: ['带背包管件', '耐磨陶瓷', '便于维护'],
    detailContent: `
      <p><strong>带背包耐磨陶瓷管件</strong>采用独特的背包结构设计，便于安装和维护。</p>

      <h2>结构创新</h2>
      <ul>
        <li>背包设计，安装便捷</li>
        <li>陶瓷内衬，耐磨性好</li>
        <li>维护方便，更换简单</li>
        <li>结构紧凑，占用空间小</li>
      </ul>

      <h2>应用优势</h2>
      <p>特别适用于需要频繁维护的管道系统，大大降低了维护成本和停机时间。</p>
    `,
    images: [daibeibao, product23, ]
  },
  {
    id: 24,
    category: '陶瓷内衬复合钢管',
    img: taocifu,
    title: '陶瓷复合钢管',
    description: '陶瓷与钢材复合制造的管道产品，性能优异。',
    code: 'TCFH-704',
    publishDate: new Date('2020-11-27'),
    tags: ['陶瓷复合', '钢管复合', '高性能管道'],
    detailContent: `
      <p><strong>陶瓷复合钢管</strong>采用先进的复合工艺，将陶瓷与钢材完美结合。</p>

      <h2>复合工艺</h2>
      <ul>
        <li>先进复合技术，结合牢固</li>
        <li>陶瓷钢材优势互补</li>
        <li>整体性能优异</li>
        <li>质量稳定可靠</li>
      </ul>

      <h2>性能特点</h2>
      <p>具有陶瓷的耐磨耐腐蚀性能和钢材的机械强度，是高端管道产品的代表。</p>
    `,
    images: [taocifu, product24,]
  },

  // 陶瓷贴片耐磨管系列
  {
    id: 25,
    category: '陶瓷贴片耐磨管',
    img: gaonai,
    title: '高耐磨陶瓷贴片',
    description: '高性能陶瓷贴片，用于管道内壁的耐磨保护。',
    code: 'GNTC-703',
    publishDate: new Date('2020-11-26'),
    tags: ['陶瓷贴片', '高耐磨', '局部保护'],
    detailContent: `
      <p><strong>耐磨陶瓷贴片耐磨管</strong>，外壁以钢管为基体，内衬高耐磨氧化铝陶瓷贴片，贴片与钢管内壁间隙填充采用专用陶瓷粘结胶固定，利用拱形自嵌原理，瓷片形成360°环形结构，陶瓷贴片边缘采用梯形设计，贴片间相互挤压、块块互锁，有效地保证了瓷片不会脱落。</p>
      <p><strong>高耐磨陶瓷贴片</strong>耐磨管耐冲击磨损能力远大于一般小陶瓷片和自蔓延陶瓷内衬复合钢管。瓷片厚度在8mm－60mm之间，可结合现场实际磨损量的工况条件来确定所需瓷片厚度。</p>

      <h2>产品特点</h2>
      <ul>
        <li>贴片技术，局部保护</li>
        <li>贴片硬度大、性价比高，使用寿命长</li>
        <li>粘接牢靠，能承受苛刻的工况</li>
        <li>耐腐蚀好，表面光滑，不堵物料</li>
        <li>维护方便，更换简单</li>
      </ul>

      <h2>技术参数</h2>
      <p>材质：氧化铝陶瓷，贴片厚度10-30mm，硬度HRA85-90，工作温度-20°C~+600°C。</p>

      <h2>应用范围</h2>
      <p>特别适用于弯头、三通等关键部位的耐磨保护，是经济实用的耐磨解决方案。</p>
    `,
    images: [gaonai, product25, product26, product27]
  },

  // 龟甲网耐磨陶瓷管系列
  {
    id: 26,
    category: '龟甲网耐磨陶瓷管',
    img: guijia1,
    title: '龟甲网耐磨陶瓷管',
    description: '采用龟甲网结构的耐磨陶瓷管，具有优异的抗冲击性能。',
    code: 'GJNM-702',
    publishDate: new Date('2020-11-25'),
    tags: ['龟甲网结构', '耐磨陶瓷', '抗冲击'],
    detailContent: `
      <p><strong>龟甲网耐磨陶瓷管</strong>以钢管为基体，选用耐高温的六角形大泥爪龟甲网，内焊锚固在基体管上做骨架，内衬刚玉质高耐磨、耐高温、耐腐蚀陶瓷复合材料，经自然反应固化形成一种复合陶瓷产品。</p>

      <h2>结构特点</h2>
      <ul>
        <li>龟甲网结构，抗冲击性强、耐温性能好</li>
        <li>陶瓷涂层，耐磨性优异、机械强度高</li>
        <li>结构稳定，使用寿命长</li>
        <li>适用于高冲击工况</li>
      </ul>

      <h2>技术参数</h2>
      <p>材质：刚玉陶瓷+龟甲网，涂层厚度15-50mm，硬度HRA80-85，抗冲击强度≥8 J/cm²。</p>

      <h2>应用优势</h2>
      <p>特别适用于有冲击载荷的管道系统，能够有效抵抗物料的冲击和磨损。</p>
    `,
    images: [guijia1, product13]
  },
  {
    id: 27,
    category: '龟甲网耐磨陶瓷管',
    img: guijia2,
    title: '龟甲网刚玉喷涂耐磨管',
    description: '龟甲网结构配合刚玉喷涂工艺的耐磨管道，性能卓越。',
    code: 'GJGY-701',
    publishDate: new Date('2020-11-25'),
    tags: ['龟甲网', '刚玉喷涂', '高性能管道'],
    detailContent: `
      <p><strong>龟甲网刚玉喷涂耐磨管</strong>结合龟甲网结构和刚玉喷涂工艺，性能卓越。</p>

      <h2>工艺特点</h2>
      <ul>
        <li>龟甲网基础，结构稳定</li>
        <li>刚玉喷涂，性能优异</li>
        <li>复合工艺，优势互补</li>
        <li>制造精密，质量可靠</li>
      </ul>

      <h2>性能优势</h2>
      <p>结合了龟甲网的抗冲击性能和刚玉的耐磨性能，是最高端的耐磨管道产品之一。</p>

      <h2>应用领域</h2>
      <p>广泛应用于最恶劣的工况环境，为客户提供最可靠的耐磨保护。</p>
    `,
    images: [guijia2, guijia2, guijia2, guijia2]
  }
]

// 根据产品分类和名称获取产品特性
export const getProductFeatures = (category, productName) => {
  // 根据具体产品名称返回特定特性
  const productSpecificFeatures = {
    真空皮带脱水机及配件: [
      '连续固液分离，处理效率高',
      '模块化设计，安装运输便捷',
      '多种胶带支承方式，设备寿命长',
      '远程控制系统，操作简便安全'
    ],
    堆焊耐磨衬板管件: [
      '堆焊层硬度HRC58-65，耐磨性强',
      '基体钢材强度高，承压能力强',
      '制造工艺成熟，质量稳定可靠',
      '相比陶瓷管件成本更经济实用'
    ],
    橡胶膨胀节: [
      '补偿管道热胀冷缩，保护系统',
      '吸收振动和位移，减少应力',
      '密封性能优异，无泄漏风险',
      '耐温范围-40°C~+120°C，适应性强'
    ],
    '烧结碳化硅陶瓷管件·喷嘴': [
      '反应烧结工艺，强度硬度极高',
      '耐极高温1600°C，热震稳定性好',
      '抗化学腐蚀，适用脱硫等恶劣环境',
      '导热性能优良，热传导效率高'
    ],
    聚四氟内衬管件: [
      '聚四氟乙烯内衬，化学稳定性极佳',
      '不粘性好，流体阻力极小',
      '耐强酸强碱，适用化工制药行业',
      '耐温范围-200°C~+260°C，性能稳定'
    ],
    钢塑复合管件: [
      '钢塑复合结构，强度与防腐并重',
      '外层钢材承压，内层塑料防腐',
      '连接可靠密封好，安装维护简便',
      '综合性能优异，性价比突出'
    ],
    衬胶管件: [
      '橡胶内衬，耐磨减震效果好',
      '弹性优异，适应管道变形',
      '降低噪音，改善工作环境',
      '安装方便，维护更换简单'
    ],
    碳化硅聚合陶瓷直管: [
      '碳化硅聚合技术，材料性能卓越',
      '内壁光滑，流体阻力小',
      '耐磨耐腐蚀，使用寿命长',
      '规格齐全，满足不同管径需求'
    ]
  }

  // 如果有具体产品的特性，优先返回
  if (productSpecificFeatures[productName]) {
    return productSpecificFeatures[productName]
  }

  // 否则根据分类返回通用特性
  const categoryFeatures = {
    碳化硅聚合陶瓷管: [
      '碳化硅聚合技术，材料强度高',
      '耐磨耐腐蚀，适用恶劣工况',
      '内壁光滑，流体阻力小',
      '使用寿命长，维护成本低'
    ],
    '反应阻燃型-碳化硅聚合陶瓷涂抹': [
      '阻燃等级高，安全性能好',
      '耐高温稳定，防火效果佳',
      '无毒环保，符合安全标准',
      '施工方便，适用范围广'
    ],
    双金属耐磨管: [
      '双金属复合，性能互补',
      '内层耐磨，外层强度高',
      '制造工艺成熟，质量稳定',
      '成本适中，性价比高'
    ],
    陶瓷内衬复合钢管: [
      '陶瓷内衬，耐磨性能卓越',
      '钢管外壳，机械强度高',
      '复合工艺，结合牢固',
      '寿命比普通钢管提升5-10倍'
    ],
    陶瓷贴片耐磨管: [
      '陶瓷贴片技术，局部重点保护',
      '安装灵活，适应性强',
      '维护方便，更换简单',
      '成本控制，经济实用'
    ],
    龟甲网耐磨陶瓷管: [
      '龟甲网结构，抗冲击性强',
      '陶瓷涂层，耐磨性优异',
      '结构稳定，使用寿命长',
      '适用高冲击高磨损工况'
    ]
  }

  return (
    categoryFeatures[category] || [
      '专业的管道产品',
      '优质的材料制造',
      '可靠的性能保证',
      '完善的售后服务'
    ]
  )
}

// 根据产品分类和名称获取产品规格
export const getProductSpecs = (category, productName) => {
  // 根据具体产品名称返回特定规格
  const productSpecificSpecs = {
    真空皮带脱水机及配件: {
      设备类型: '水平带式真空脱水机',
      滤布宽度: '≤4.5米',
      胶带规格: '500-1400mm多种尺寸',
      工作压力: '真空-0.08MPa',
      处理能力: '根据物料特性定制'
    },
    堆焊耐磨衬板管件: {
      堆焊层硬度: 'HRC58-65',
      堆焊层厚度: '6-20mm',
      基体材质: '优质碳钢',
      工作温度: '-20°C ~ +400°C',
      适用压力: '≤2.5MPa'
    },
    橡胶膨胀节: {
      工作温度: '-40°C ~ +120°C',
      工作压力: '0.25 ~ 2.5MPa',
      补偿量: '±10 ~ ±50mm',
      连接方式: '法兰连接',
      橡胶材质: '天然橡胶/氯丁橡胶'
    },
    '烧结碳化硅陶瓷管件·喷嘴': {
      材质: '反应烧结碳化硅',
      硬度: 'HRA90-95',
      密度: '3.1-3.2 g/cm³',
      工作温度: '≤1600°C',
      适用管径: '≤DN400'
    },
    聚四氟内衬管件: {
      内衬材质: '聚四氟乙烯(PTFE)',
      工作温度: '-200°C ~ +260°C',
      工作压力: '≤1.6MPa',
      化学稳定性: '耐强酸强碱',
      摩擦系数: '0.04-0.1'
    },
    钢塑复合管件: {
      外层材质: '优质碳钢',
      内层材质: '聚乙烯/聚丙烯',
      工作温度: '-20°C ~ +80°C',
      工作压力: '≤1.6MPa',
      连接方式: '法兰/螺纹连接'
    },
    衬胶管件: {
      橡胶材质: '天然橡胶/丁基橡胶',
      橡胶厚度: '6-15mm',
      工作温度: '-30°C ~ +80°C',
      工作压力: '≤1.0MPa',
      邵氏硬度: '60-80度'
    },
    碳化硅聚合陶瓷直管: {
      材质: '碳化硅聚合陶瓷',
      硬度: 'HRA85-90',
      密度: '3.1-3.2 g/cm³',
      工作温度: '-40°C ~ +800°C',
      适用管径: 'DN50-DN1200'
    }
  }

  // 如果有具体产品的规格，优先返回
  if (productSpecificSpecs[productName]) {
    return productSpecificSpecs[productName]
  }

  // 否则根据分类返回通用规格
  const categorySpecs = {
    碳化硅聚合陶瓷管: {
      材质: '碳化硅聚合陶瓷',
      硬度: 'HRA85-90',
      密度: '3.1-3.2 g/cm³',
      工作温度: '-40°C ~ +800°C',
      适用介质: '各种磨蚀性物料'
    },
    '反应阻燃型-碳化硅聚合陶瓷涂抹': {
      材质: '阻燃型碳化硅陶瓷',
      阻燃等级: 'A级不燃',
      工作温度: '≤1200°C',
      涂抹厚度: '10-50mm',
      粘接强度: '≥10MPa'
    },
    双金属耐磨管: {
      材质: '合金钢+耐磨层',
      硬度: 'HRC58-65',
      厚度: '6-20mm',
      工作温度: '-20°C ~ +400°C',
      适用压力: '≤2.5MPa'
    },
    陶瓷内衬复合钢管: {
      材质: '刚玉陶瓷+碳钢',
      陶瓷厚度: '6-20mm',
      硬度: 'HRA85-88',
      工作温度: '-40°C ~ +700°C',
      适用管径: 'DN50-DN1200'
    },
    陶瓷贴片耐磨管: {
      材质: '氧化铝陶瓷',
      贴片厚度: '10-30mm',
      硬度: 'HRA85-90',
      工作温度: '-20°C ~ +600°C',
      粘接强度: '≥15MPa'
    },
    龟甲网耐磨陶瓷管: {
      材质: '刚玉陶瓷+龟甲网',
      涂层厚度: '15-50mm',
      硬度: 'HRA80-85',
      工作温度: '-40°C ~ +800°C',
      抗冲击强度: '≥8 J/cm²'
    }
  }

  return (
    categorySpecs[category] || {
      材质: '优质钢材',
      工作压力: '1.6MPa',
      工作温度: '-20°C ~ +200°C',
      连接方式: '法兰连接',
      标准: 'GB/T标准'
    }
  )
}

// 根据产品标题查找产品数据
export const findProductByTitle = title => {
  return allProductList.find(product => product.title === title)
}

// 根据产品ID查找产品数据
export const findProductById = id => {
  return allProductList.find(product => product.id === Number(id))
}

// 获取分类下的产品列表
export const getProductsByCategory = category => {
  return allProductList.filter(product => product.category === category)
}

// 获取相关产品（同分类的其他产品）
export const getRelatedProducts = (currentProduct, limit = 4) => {
  return allProductList
    .filter(
      product => product.category === currentProduct.category && product.id !== currentProduct.id
    )
    .slice(0, limit)
}
