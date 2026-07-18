// 主页经历时间轴双语数据

const en = [
  {
    date: '2024-2027',
    type: 'Educate',
    title: 'Southern University of Science and Technology',
    description: 'Master student in Intelligent Manufacturing and Robotics',
    detail:
      'Built cross-disciplinary expertise in HCI, experimental design, robotics, and continuum mechanics, with hands-on skills in hardware prototyping and qualitative and quantitative research. Curated multiple international exhibitions and use English as an academic working language. GPA 3.4/4; honored as Outstanding Graduate Student; contributed to national award-winning projects and published first-author papers at ACM DIS and ICHEC.',
  },
  {
    date: '26.04-26.06',
    type: 'Intern',
    title: 'Hyper-dynamics',
    description: 'Embodied AI Product Manager Intern',
    detail:
      'Led product definition for a motion-capture data processing pipeline, covering one-click detection, automated repair, and fine-grained adjustment for timestamp errors, joint limits, self-collision, and ground penetration. Also supported power-industry robotics solution planning and benchmarked data platforms, simulation tools, annotation workflows, and wheel-leg robot ODM options.',
    muted: true,
  },
  {
    date: '25.12-26.03',
    type: 'Intern',
    title: 'Anke Innovation Technology',
    description: 'Human Factors Engineer Intern',
    detail:
      'Conducted long- and short-duration comfort and stability tests for sleep earphones, combining qualitative observations with quantitative measurements to locate pressure and discomfort areas. Supported ID optimization through 3D scanning, fit interference analysis, finite element workflows, and a computer-vision assisted ear measurement tool for overseas participants.',
    muted: true,
  },
  {
    date: '2019-2024',
    type: 'Educate',
    title: 'South-Central Minzu University',
    description: 'Bachelor of Architecture, Minor in English',
    detail:
      'Ranked first in the architecture program with a GPA of 3.84/5, supported by five university-level scholarships and seven honorary titles. Earned five provincial-or-above competition awards, including two at the national level. Built a solid foundation in architectural design, spatial research, and English-language proficiency through a minor in English.',
  },
  {
    date: '23.11-24.02',
    type: 'Intern',
    title: 'United Practice Architects',
    description: 'Architectural Design Intern',
    detail:
      'Contributed to rural revitalization projects, including the overall planning of the Suixian Hemei Center and the architectural renovation and interior design of the Zhenzhuquan Rural Museum. Conducted case studies on steel-timber hybrid structures. The work strengthened an end-to-end design workflow spanning master planning, adaptive reuse, interior design, and structural research.',
    muted: true,
  },
  {
    date: '22.07-22.09',
    type: 'Intern',
    title: 'Central South Architectural Design Institute',
    description: 'Architectural Design Intern',
    detail:
      'Contributed to the revision and approval process for the schematic design of the Caodianzi Street renewal project, and participated in the competition for the Duohu Development Zone in Jinhua, Zhejiang. The experience connected academic architectural training with professional standards for design delivery, documentation, and project coordination.',
    muted: true,
  },
]

const zh = [
  {
    date: '2024-2027',
    type: '教育',
    title: '南方科技大学',
    description: '智能制造与机器人 · 硕士',
    detail:
      '系统掌握人机交互方法与实验设计，具备交互方案设计、硬件原型开发及定性、定量研究能力；修习运动学控制与连续介质力学，兼具机器人与力学理论基础。GPA 3.4/4；获评优秀团员与优秀研究生；参与多个国际展览策展，参与项目荣获国家级竞赛奖项，并以第一作者发表 ACM DIS、ICHEC 等顶会论文。可将英文作为学术交流语言。',
  },
  {
    date: '26.04-26.06',
    type: '实习',
    title: '深圳超维动力智能科技',
    description: '具身产品经理',
    detail:
      '主导动捕数据处理管线产品定义：针对时间戳异常、关节越界、自碰撞、穿地等质量问题，定义一键检测、一键修复与精细化调整，输出完整 PRD 并推动落地。参与电力行业具身机器人解决方案规划；系统调研具身智能数据平台与轮臂机器人 ODM 选型，输出竞品分析与结构化选型建议。',
    muted: true,
  },
  {
    date: '25.12-26.03',
    type: '实习',
    title: 'Anker 安克创新',
    description: '人因工程师助理',
    detail:
      '执行睡眠耳机长/短时静态及动态稳定性测试，结合定性与定量数据定位佩戴不适区域，协助 ID 完成方案筛选与优化。通过三维扫描与有限元仿真识别干涉区域，输出贴合面优化方案；设计基于计算机视觉的欧美被试耳部测量工具，辅助佩戴舒适性与贴合性分析。',
    muted: true,
  },
  {
    date: '2019-2024',
    type: '教育',
    title: '中南民族大学',
    description: '建筑学学士 · 英语辅修',
    detail:
      'GPA 3.84/5，专业排名第一；5 次校级奖学金、7 项荣誉称号；获 5 项省部级以上学科竞赛大奖（含国家级 2 项）。借由建筑学训练与英语辅修，夯实建筑设计、空间研究与英文学术表达能力。',
  },
  {
    date: '23.11-24.02',
    type: '实习',
    title: '原榀建筑事务所',
    description: '建筑设计实习',
    detail:
      '参与乡村振兴项目：随县和美中心总体规划，珍珠泉乡村博物馆建筑改造与室内设计；并开展钢木混合结构案例研究。强化从总体规划、既有改造、室内设计到结构研究的端到端流程。',
    muted: true,
  },
  {
    date: '22.07-22.09',
    type: '实习',
    title: '中南建筑设计院',
    description: '建筑设计实习',
    detail:
      '参与草店子街更新项目方案修改与报批，并参与浙江金华多湖开发区竞赛。将学院建筑训练衔接到专业交付、图纸与项目协调标准。',
    muted: true,
  },
]

export const timelineByLocale = { en, zh }
