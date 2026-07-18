const en = [
  {
    id: 'ai-3',
    title: 'Reactive Desk',
    year: '2025',
    direction: 'AI Systems',
    description:
      'A human-robot collaborative desktop system for ambiguous instructions, combining projection, a desktop camera, ArUco markers, and a Franka robotic arm. The project maps voice or text commands into multimodal tabletop actions, supports OpenPI-based action visualization, and closes the loop through VR teleoperation data collection, LoRA fine-tuning, and real-robot deployment.',
    type: 'Robotics',
    thumbnail: 'images/reactive desk.png',
  },
  {
    id: 'ai-1',
    title: 'AI Agent Reimbursement System',
    year: '2026',
    direction: 'AI Systems',
    description:
      'A local reimbursement backend on the Notion API that syncs records into SQLite with full status history. Features a searchable dashboard, direct Notion status updates, merged PDF generation, invoice-to-Excel intake, real-time batch progress, and detail pages with attachments and a visual status timeline.',
    type: 'Development',
    thumbnail: 'images/ai-rebustment.png',
  },
  {
    id: 'ai-2',
    title: 'XiShi · AI Personalized Nutrition Recommendation & One-Click Ordering',
    year: '2026',
    direction: 'AI Systems',
    description:
      'An AI-driven fresh-food rescue platform that matches supermarket produce in its 24–72 hour “best-eating window” with users’ personalized nutrition needs. A five-factor constraint engine balances freshness priority, recipe rationality, nutrition, user preference, and store profitability to turn perishable surplus into ready-to-cook meal kits with one-click ordering.',
    type: 'Product',
    thumbnail: 'images/xishi.png',
  },
  {
    id: 'hci-1',
    title: 'Splash into Bubbles',
    year: '2026',
    direction: 'HCI DESIGN',
    description:
      "An interactive device using progressive sensory fading to guide users into sleep. Visual, auditory, and haptic cues fade sequentially in sync with respiratory feedback, simulating the body's natural sensory shutdown to reduce pre-sleep multidimensional arousal and facilitate sleep onset.",
    type: 'Research',
    thumbnail: 'images/splash-into-bubbles.png',
  },
  {
    id: 'hci-2',
    title: 'Echoes of the Body',
    year: '2025',
    direction: 'HCI DESIGN',
    description:
      'A multisensory biofeedback system that turns heartbeat and breathing into visual particles and chair vibrations for pre-sleep relaxation. A 26-participant study showed it boosted positive mood, reduced stress, and steadily lowered heart rate. Tactile feedback proved most effective for winding down.',
    type: 'Research',
    thumbnail: 'images/echoes-of-the-body.png',
  },
  {
    id: 'hci-3',
    title: 'EmoTun',
    year: '2025',
    direction: 'HCI DESIGN',
    description:
      'A three-layer musical co-creation system for expressive arts therapy. Hand gestures control melody, EEG-driven emotion classification modulates timbre, and an LLM generates harmonic accompaniment. Built on physiologically-anchored scaffolding—AI support grounded in bodily signals rather than replacing human creativity.',
    type: 'Design',
    thumbnail: 'images/emotun.png',
  },
  {
    id: 'hci-4',
    title: 'Sleep Whisper',
    year: '2024',
    direction: 'HCI DESIGN',
    description:
      'A smart napping system that tracks sleep stages via EEG to wake users at the optimal moment, preventing sleep inertia. Upon waking, generative AI reconstructs brain signals into personalized imagery and music, enabling dream recording and replay. Survey data showed over 70% of users are interested in recording and exploring their dreams.',
    type: 'Design',
    thumbnail: 'images/sleep-whisper.png',
  },
  {
    id: 'hci-5',
    title: 'EatTogether 2050',
    year: '2024',
    direction: 'HCI DESIGN',
    description:
      'A speculative dining-and-social system for 2050 Shenzhen, exploring personalized food experiences and remote emotional connection through AI, 3D printing, and AR/VR. Features include gamified mystery-box bento selection, immersive cooking lessons that replicate memory-laden flavors, and holographic remote dining.',
    type: 'Design',
    thumbnail: 'images/eat-together.png',
  },
  {
    id: 'arch-1',
    title: 'Wuchang Shipyard Waterfront Space Design',
    year: '2024',
    direction: 'Architecture',
    description:
      'Graduation design transforming the former Wuchang Shipyard riverside in Wuhan into a mixed-use waterfront district. The scheme combines a commercial complex, a shipyard museum, and an urban waterfront park, preserving industrial heritage while reactivating the closed riverfront as a cultural-tourism node along the "Two Rivers, Four Banks" core.',
    type: 'Urban Design',
    thumbnail: 'images/wuchang-shipyard.jpg',
  },
  {
    id: 'arch-2',
    title: 'Forest Protection Matrix',
    year: '2023',
    direction: 'Architecture',
    description:
      'A vertical firefighting and post-fire ecological restoration system for forest wildfires. A matrix of fire towers detects fires, creates isolation belts through controlled discharge, extinguishes flames with stored water, and provides shelter and planting layers to accelerate forest recovery.',
    type: 'Conceptual Design',
    thumbnail: 'images/forest-protection-matrix.jpg',
  },
  {
    id: 'arch-3',
    title: 'Huatuo Town TCM Tourism Planning',
    year: '2023',
    direction: 'Architecture',
    description:
      'A traditional Chinese medicine tourism town plan in Bozhou, hometown of the legendary doctor Hua Tuo. Using an "acupuncture" planning strategy, the project integrates medicine circulation, science popularization, and cultural services to inherit TCM culture and drive local industrial development.',
    type: 'Planning',
    thumbnail: 'images/huatuo.jpg',
  },
  {
    id: 'arch-4',
    title: 'Shore Ripple — Macau Waterfront Design',
    year: '2022',
    direction: 'Architecture',
    description:
      'An urban park and waterfront theater design on a former abandoned wharf in Macau, located at the junction of cultural and economic centers. The project weaves beaches, green spaces, and a whale-leaping shaped iconic theater into a continuous public sea façade for leisure and performance.',
    type: 'Building Design',
    thumbnail: 'images/shore-ripple.png',
  },
  {
    id: 'arch-5',
    title: 'Traversed Plaza',
    year: '2022',
    direction: 'Architecture',
    description:
      'A climate-resilient open commercial complex in Jinhua serving office workers and riverside residents. The design returns public space to citizens through oversized open staircases connecting indoor and outdoor realms, while passive energy-saving strategies reduce building energy consumption.',
    type: 'Building Design',
    thumbnail: 'images/traverled plaza.jpg',
  },
]

const zh = [
  {
    id: 'ai-3',
    title: 'Reactive Desk',
    year: '2025',
    direction: 'AI Systems',
    description:
      '面向模糊指令的人机协作桌面系统：搭建投影、桌面相机、ArUco 标记与 Franka 机械臂协同的虚实结合桌面，将模糊语音/文本映射为多模态动作并投影可视化。完成 VR 遥操作采集、LoRA 微调与真机部署全链路，形成从交互数据采集到策略执行的闭环验证。',
    type: 'Robotics',
    thumbnail: 'images/reactive desk.png',
  },
  {
    id: 'ai-1',
    title: 'AI Agent 报销系统',
    year: '2026',
    direction: 'AI Systems',
    description:
      '以 AI Agent 为核心、基于 Notion 的团购报销自动化系统：覆盖数据接入、属性提取、凭证分类、PDF 合成与状态回写的一键闭环。本地 SQLite 同步 Notion，支持多维筛选、状态时间轴与历史附件；模块化架构可按场景切换全流程 PDF、纯下载或发票提取。',
    type: 'Development',
    thumbnail: 'images/ai-rebustment.png',
  },
  {
    id: 'ai-2',
    title: '惜食 · AI营养推荐',
    year: '2026',
    direction: 'AI Systems',
    description:
      'AI 生鲜救援平台，将超市 24–72 小时「最佳食用窗口」食材与用户营养需求匹配。五因子引擎权衡新鲜度、菜谱合理性、营养、偏好与门店盈利，把临期余量转为一键下单的即烹套餐。',
    type: 'Product',
    thumbnail: 'images/xishi.png',
  },
  {
    id: 'hci-1',
    title: 'Splash into Bubbles',
    year: '2026',
    direction: 'HCI DESIGN',
    description:
      "以渐进式感官褪色引导入睡的交互装置。视觉、听觉与触觉随呼吸反馈依次淡出，模拟入睡过程中外部世界的消退，降低睡前多维唤醒并促进入睡。成果收录于 ACM DIS Companion '26，获交互赛道一等奖。",
    type: 'Research',
    thumbnail: 'images/splash-into-bubbles.png',
  },
  {
    id: 'hci-2',
    title: 'Echoes of the Body',
    year: '2025',
    direction: 'HCI DESIGN',
    description:
      "多感官生物反馈系统：以 PPG 与呼吸带采集生理信号，转化为与心跳、呼吸同步的视觉、听觉与触觉反馈，增强内感受觉知、改善积极睡前状态。26 人用户研究结合量表、访谈与生理监测验证有效性。成果收录于 ACM ICHEC '25。",
    type: 'Research',
    thumbnail: 'images/echoes-of-the-body.png',
  },
  {
    id: 'hci-3',
    title: 'EmoTun',
    year: '2025',
    direction: 'HCI DESIGN',
    description:
      '基于情绪响应的数字乐器：定位「易于学习、人机共情」，以 EEG 驱动音色反馈。主导 Arduino、树莓派硬件搭建与联调，定义弹奏、记录与 AI 共创三类核心功能，实现情绪状态与音色输出的实时映射。',
    type: 'Design',
    thumbnail: 'images/emotun.png',
  },
  {
    id: 'hci-4',
    title: 'Sleep Whisper',
    year: '2024',
    direction: 'HCI DESIGN',
    description:
      '面向职场人群睡眠惰性与梦境遗忘痛点的智能午睡系统：以 EEG 追踪睡眠阶段并在最佳时机唤醒；结合生成式 AI 将脑电信号转化为个性化影像与音乐，实现梦境重构。问卷研究（N=153）结论直接驱动产品决策。',
    type: 'Design',
    thumbnail: 'images/sleep-whisper.png',
  },
  {
    id: 'hci-5',
    title: 'EatTogether 2050',
    year: '2024',
    direction: 'HCI DESIGN',
    description:
      '面向 2050 深圳都市人群的未来餐饮社交系统，回应个性化餐饮与远程情感连接需求。含 AI + 3D 打印办公用餐、AR/VR 跨时空共餐，以及虚拟庆典等场景；展出于墨尔本设计学院 Edible Urban Futures。',
    type: 'Design',
    thumbnail: 'images/eat-together.png',
  },
  {
    id: 'arch-1',
    title: '武昌造船厂滨水空间更新设计',
    year: '2024',
    direction: 'Architecture',
    description:
      '毕业设计：将武汉原武昌造船厂滨江地带转化为综合滨水片区。融合商业综合体、船厂博物馆与滨水公园，在保护工业遗产的同时激活封闭江岸，成为「两江四岸」核心区文旅节点。',
    type: 'Urban Design',
    thumbnail: 'images/wuchang-shipyard.jpg',
  },
  {
    id: 'arch-2',
    title: '森林消防矩阵',
    year: '2023',
    direction: 'Architecture',
    description:
      '面向森林野火的垂直消防与灾后生态恢复系统。防火塔矩阵探测火情、以可控排放形成隔离带、蓄水灭火，并提供庇护与种植层，加速森林恢复。',
    type: 'Conceptual Design',
    thumbnail: 'images/forest-protection-matrix.jpg',
  },
  {
    id: 'arch-3',
    title: '华佗镇中医药旅游小镇规划',
    year: '2023',
    direction: 'Architecture',
    description:
      '华佗故里亳州的中医药旅游小镇规划。以「针灸」式策略整合药材流通、科普与文化服务，传承中医药文化并带动地方产业。',
    type: 'Planning',
    thumbnail: 'images/huatuo.jpg',
  },
  {
    id: 'arch-4',
    title: '岸涟 · 澳门滨水空间设计',
    year: '2022',
    direction: 'Architecture',
    description:
      '澳门废弃码头上的城市公园与滨水剧场，地处文化与经济中心交汇。将沙滩、绿地与鲸跃造型剧场织成连续公共海界面，服务休闲与演出。',
    type: 'Building Design',
    thumbnail: 'images/shore-ripple.png',
  },
  {
    id: 'arch-5',
    title: '漫游广场',
    year: '2022',
    direction: 'Architecture',
    description:
      '金华气候韧性开放式商业综合体，服务上班族与滨河居民。以超尺度开放楼梯连接室内外，把公共空间还给市民，并以被动节能降低建筑能耗。',
    type: 'Building Design',
    thumbnail: 'images/traverled plaza.jpg',
  },
]

export const projectsByLocale = { en, zh }
