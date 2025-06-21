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
      <p><strong>真空皮带脱水机</strong>，以滤布为过滤介质，利用物料重力和真空吸力实现固液分离的效率高的固液分离设备。</p>

      <h2>工作原理</h2>
      <p>该设备采用固定真空盒，滤布铺敷在环形胶带上，环形胶带由减速机拖动在真空盒上连续运行，胶带与真空盒滑台上的摩擦带接触并形成水密封结构。料浆由下料斗，均匀的布在滤布上。当真空室接通真空系统时，在胶带上形成真空抽滤区，滤液穿过滤布经胶带上的横沟槽汇总并由小孔进入真空室，固体颗粒被截留在滤布上形成滤饼。</p>

      <h2>设备特点</h2>
      <ul>
        <li>在结构上实现模块化设计，组装灵活，运输方便。也可安装调试完毕后，在整体吊装运输。</li>
        <li>在过滤上实现了滤布与胶带同步运行，能够连续完成进料、抽滤、洗涤、干燥、滤布再生等功能。</li>
        <li>在控制上实现远程与现场交互控制的方式，便于实施操作。</li>
        <li>在胶带支承上实现了托辊式、气垫式、托盘式、多条摩擦带支撑的多种方式减少摩擦阻力，增加胶带寿命。</li>
        <li>在洗涤上实现了分段收集，并可顺流或逆流洗涤。</li>
        <li>在滤布再生上可选配高压清洗方式增加滤布的再生效果及寿命。</li>
        <li>在排液方式上有零位排液、高位排液、辅助排液。</li>
        <li>在设备外形上增加了气罩或铝塑窗实现了半封闭或全封闭，用于含挥发性气体或蒸汽的物料处理。</li>
      </ul>

      <h2>设备主要配件</h2>
      <h3>滤布</h3>
      <p>烟气脱硫中真空皮带脱水机的滤布，具有抗拉强度大、耐磨、耐酸碱性、易剥离、滤水性能好等特点，特别是独特的接头、封边、制作工艺，能提高滤布的使用寿命。公司代理各种型号进口，国产滤布。规格：宽度为4.5米以内、长度不限。</p>

      <h3>橡胶棍</h3>
      <p>真空皮带脱水机的主、从动棍，是驱动皮带运动的部件，由钢质滚筒外包耐酸碱橡胶制成。规格：500、820、1000、1200、1400等各种规格尺寸。</p>

      <h3>胶带</h3>
      <p>橡胶过滤带也称真空皮带，是DU水平带式真空脱水机的关键部件。带体表面为一排排横向沟槽，沟槽中有一排或多排排液孔，排液孔段可采用纯胶结构；带体的骨架层采用高强度的聚酯帆布或绦纶帆布滤带的上、下覆盖胶可根据工况条件采用不同的配方，满足耐酸碱、耐热、耐油、耐寒等不同需求；胶带的成型和硫化采用一次整体复合工艺，确保了带体的平整和性能的稳定。</p>

      <h3>喷嘴</h3>
      <p>喷嘴的功效：采用工艺水喷射，清洗滤布和胶带，且配置有真空吸管密封的箱体，这样可以保证清洁的工作现场。喷头采用国际喷雾公司的产品，可以充分保证清洗效果。</p>

      <h3>旋流器</h3>
      <p>旋流子采用新型耐磨、耐腐材料制作，设计结构合理，能有效提高旋流子的寿命和处理效果。具有浓缩效果好、分级效率高、耐酸碱腐蚀性强、使用寿命长等特点。</p>

      <h3>纠偏总成</h3>
      <p>采用气缸或气囊推动纠偏转一定角度来自动纠正滤布的偏移，保证滤布的正常运转。</p>
    `,
    images: [zhenkong, zhenkong, zhenkong, zhenkong]
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
    images: [duihan, duihan, duihan, duihan]
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
      <p><strong>橡胶膨胀节</strong>是管道系统中的重要补偿元件，用于吸收管道的热胀冷缩、振动和位移。</p>

      <h2>产品优势</h2>
      <ul>
        <li>补偿能力强，能够吸收轴向、横向和角向位移</li>
        <li>密封性能好，无泄漏</li>
        <li>耐温范围广，适应性强</li>
        <li>安装维护方便</li>
      </ul>

      <h2>技术参数</h2>
      <p>工作温度：-40°C ~ +120°C<br>
      工作压力：0.25 ~ 2.5MPa<br>
      补偿量：±10 ~ ±50mm<br>
      连接方式：法兰连接</p>

      <h2>应用场合</h2>
      <p>广泛应用于供热、供水、化工、冶金等管道系统中，特别适用于有温度变化和振动的场合。</p>
    `,
    images: [xiangjiao, xiangjiao, xiangjiao, xiangjiao]
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
      <p><strong>反应烧结碳化硅制品</strong>具有高强度、高硬度、高耐磨、耐高温、耐腐蚀、抗热震、导热好、耐极冷急热和抗高温蠕变等优异性能和主要特点。可制成耐腐蚀件、耐磨件、脱硫喷嘴、耐腐蚀件及各种异型结构件等。</p>

      <h2>产品规格</h2>
      <p>提供DN400及以下<strong>烧结碳化硅陶瓷管件</strong>及脱硫用各种喷嘴。</p>

      <h2>产品特性</h2>
      <ul>
        <li>高强度、高硬度，机械性能优异</li>
        <li>高耐磨性能，使用寿命长</li>
        <li>耐高温性能突出，可在极端温度下工作</li>
        <li>耐腐蚀性强，适用于恶劣化学环境</li>
        <li>抗热震性能好，温度急变不开裂</li>
        <li>导热性能优良，热传导效率高</li>
        <li>耐极冷急热，温度适应范围广</li>
        <li>抗高温蠕变，长期高温下形状稳定</li>
      </ul>

      <h2>应用领域</h2>
      <p>广泛应用于脱硫系统、化工设备、冶金工业、电力行业等领域，特别适用于制造耐腐蚀件、耐磨部件、脱硫喷嘴等关键组件。</p>

      <h2>产品优势</h2>
      <p>采用反应烧结工艺制造，确保产品具有优异的综合性能，能够在极端工况下稳定工作，是传统材料的理想替代品。</p>
    `,
    images: [penzui, penzui, penzui, penzui]
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
      <p><strong>聚四氟内衬管件</strong>采用优质聚四氟乙烯材料作为内衬，具有优异的耐腐蚀性能。</p>

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
    images: [jusi, jusi, jusi, jusi]
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
      <p><strong>钢塑复合管件</strong>采用钢塑复合结构，结合了钢材的强度和塑料的耐腐蚀性。</p>

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
    images: [gangsu, gangsu, gangsu, gangsu]
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
    images: [chenjiao, chenjiao, chenjiao, chenjiao]
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
    images: [tanhua, tanhua, tanhua, tanhua]
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
    images: [chenci, chenci, chenci, chenci]
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
    images: [daituo, daituo, daituo, daituo]
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
    images: [tanhuada, tanhuada, tanhuada, tanhuada]
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
      <p><strong>碳化硅聚合陶瓷管</strong>是我公司的主打产品，具有卓越的耐磨和耐腐蚀性能。</p>

      <h2>核心技术</h2>
      <ul>
        <li>碳化硅聚合技术，强度超群</li>
        <li>特殊配方，性能稳定</li>
        <li>精密制造，质量可靠</li>
        <li>多规格可选，适应性强</li>
      </ul>

      <h2>性能指标</h2>
      <p>硬度HRA85-90，密度3.1-3.2g/cm³，工作温度-40°C~+800°C，是传统管材的理想替代品。</p>
    `,
    images: [tanhuahe, tanhuahe, tanhuahe, tanhuahe]
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
    images: [tanhuayi, tanhuayi, tanhuayi, tanhuayi]
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
      <p><strong>碳化硅衬瓷管件</strong>采用碳化硅衬瓷工艺制造，结合了碳化硅的优异性能。</p>

      <h2>工艺特点</h2>
      <ul>
        <li>衬瓷工艺，性能卓越</li>
        <li>碳化硅材料，耐磨耐腐</li>
        <li>复合结构，优势互补</li>
        <li>制造精密，质量稳定</li>
      </ul>

      <h2>技术优势</h2>
      <p>充分发挥碳化硅材料的优异性能，为客户提供高品质的管道解决方案。</p>
    `,
    images: [tanhuaguan, tanhuaguan, tanhuaguan, tanhuaguan]
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
      <p><strong>碳化硅直管</strong>采用纯碳化硅材料制造，适用于极端工况环境。</p>

      <h2>材料优势</h2>
      <ul>
        <li>纯碳化硅材料，性能极佳</li>
        <li>耐极高温，可达1600°C</li>
        <li>化学稳定性好，耐强腐蚀</li>
        <li>机械强度高，抗冲击</li>
      </ul>

      <h2>应用领域</h2>
      <p>特别适用于高温、强腐蚀、高磨损的极端工况环境，是最高端的管道产品。</p>
    `,
    images: [tanhuazhi, tanhuazhi, tanhuazhi, tanhuazhi]
  },

  // 反应阻燃型-碳化硅聚合陶瓷涂抹系列
  {
    id: 17,
    category: '反应阻燃型-碳化硅聚合陶瓷涂抹',
    img: zuran1,
    title: '阻燃型碳化硅衬瓷材料',
    description: '具有阻燃特性的碳化硅衬瓷材料，适用于高温高风险环境。',
    code: 'ZRTH-711',
    publishDate: new Date('2020-11-30'),
    tags: ['阻燃材料', '碳化硅衬瓷', '高温防护'],
    detailContent: `
      <p><strong>阻燃型碳化硅衬瓷材料</strong>具有优异的阻燃特性，适用于高温高风险环境。</p>

      <h2>阻燃特性</h2>
      <ul>
        <li>阻燃等级高，安全性好</li>
        <li>高温稳定，不易燃烧</li>
        <li>无毒无害，环保安全</li>
        <li>耐久性好，使用寿命长</li>
      </ul>

      <h2>应用场合</h2>
      <p>广泛应用于石化、冶金等高温高风险行业，为设备和人员提供可靠的防火保护。</p>
    `,
    images: [zuran1, zuran1, zuran1, zuran1]
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
    images: [zuran2, zuran2, zuran2, zuran2]
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
      <p><strong>双金属耐磨管及异形件</strong>采用双金属复合结构，具有优异的耐磨性能和经济性。</p>

      <h2>结构特点</h2>
      <ul>
        <li>双金属复合，性能互补</li>
        <li>内层耐磨，外层强度高</li>
        <li>制造工艺成熟，质量稳定</li>
        <li>成本适中，性价比高</li>
      </ul>

      <h2>技术参数</h2>
      <p>耐磨层硬度HRC58-65，厚度6-20mm，工作温度-20°C~+400°C，适用压力≤2.5MPa。</p>

      <h2>应用优势</h2>
      <p>是中等磨损工况的理想选择，在保证性能的同时有效控制成本。</p>
    `,
    images: [shuangjin, shuangjin, shuangjin, shuangjin]
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
      <p><strong>陶瓷内衬复合钢管</strong>结合了陶瓷的耐磨性和钢材的强度，是理想的耐磨管道产品。</p>

      <h2>复合结构</h2>
      <ul>
        <li>陶瓷内衬，耐磨性能卓越</li>
        <li>钢管外壳，机械强度高</li>
        <li>复合工艺，结合牢固</li>
        <li>整体性能，优势明显</li>
      </ul>

      <h2>技术指标</h2>
      <p>陶瓷厚度6-20mm，硬度HRA85-88，工作温度-40°C~+700°C，适用管径DN50-DN1200。</p>

      <h2>应用效果</h2>
      <p>使用寿命比普通钢管提升5-10倍，是高磨损输送系统的首选产品。</p>
    `,
    images: [taoci, taoci, taoci, taoci]
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
      <p><strong>陶瓷耐磨弯管</strong>专为弯道输送系统设计，具有优异的耐磨性能。</p>

      <h2>设计特点</h2>
      <ul>
        <li>弯管结构，适应管路走向</li>
        <li>陶瓷内衬，耐磨性强</li>
        <li>流线设计，阻力小</li>
        <li>结构合理，应力分布均匀</li>
      </ul>

      <h2>应用优势</h2>
      <p>特别适用于高磨损的弯道输送系统，有效解决弯头磨损严重的问题。</p>
    `,
    images: [taociwan, taociwan, taociwan, taociwan]
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
    images: [taocinai, taocinai, taocinai, taocinai]
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
    images: [daibeibao, daibeibao, daibeibao, daibeibao]
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
    images: [taocifu, taocifu, taocifu, taocifu]
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
      <p><strong>高耐磨陶瓷贴片</strong>是用于管道内壁耐磨保护的高性能产品。</p>

      <h2>产品特点</h2>
      <ul>
        <li>贴片技术，局部保护</li>
        <li>安装灵活，适应性强</li>
        <li>成本控制，性能优异</li>
        <li>维护方便，更换简单</li>
      </ul>

      <h2>技术参数</h2>
      <p>材质：氧化铝陶瓷，贴片厚度10-30mm，硬度HRA85-90，工作温度-20°C~+600°C。</p>

      <h2>应用范围</h2>
      <p>特别适用于弯头、三通等关键部位的耐磨保护，是经济实用的耐磨解决方案。</p>
    `,
    images: [gaonai, gaonai, gaonai, gaonai]
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
      <p><strong>龟甲网耐磨陶瓷管</strong>采用独特的龟甲网结构，具有优异的抗冲击性能。</p>

      <h2>结构特点</h2>
      <ul>
        <li>龟甲网结构，抗冲击性强</li>
        <li>陶瓷涂层，耐磨性优异</li>
        <li>结构稳定，使用寿命长</li>
        <li>适用于高冲击工况</li>
      </ul>

      <h2>技术参数</h2>
      <p>材质：刚玉陶瓷+龟甲网，涂层厚度15-50mm，硬度HRA80-85，抗冲击强度≥8 J/cm²。</p>

      <h2>应用优势</h2>
      <p>特别适用于有冲击载荷的管道系统，能够有效抵抗物料的冲击和磨损。</p>
    `,
    images: [guijia1, guijia1, guijia1, guijia1]
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
