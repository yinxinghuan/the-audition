// The Audition — minimal i18n (en / zh). Sequel to The Photographer.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'audition_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    // ── Choices ────────────────────────────────────────────────────────────
    'choice.ask_why':           'ask why she came',
    'choice.tell_to_pose':      'tell her to take the cyclorama',
    'choice.let_her_talk':      'let her talk about the photos',
    'choice.show_her_door':     'show her the door',
    'choice.copy_lin_wei':      "ask her to copy Lin Wei's pose",
    'choice.find_own_pose':     'ask her to find her own pose',
    'choice.listen_deeper':     'listen. let her finish.',
    'choice.look_shoulder':     'look at her shoulder',
    'choice.let_her_go':        'let her go',
    'choice.look_at_wall':      'look back at the white wall',
    'choice.shoot_it':          'shoot it',
    'choice.wait_one_beat':     'wait one beat',
    'choice.trust_her':         'trust where she goes',
    'choice.ask_one_more':      'ask for one more',

    // ── Endings ────────────────────────────────────────────────────────────
    // ── Subtitles (UI overlay, NOT baked into video) ───────────────────────
    'subtitle.A':   'I want you to shoot me like her.',
    'subtitle.AA':  "I've looked at these every night for six months.",
    'subtitle.AAA': "We were roommates at FIT. She would come back from your shoots and not sleep for two days.",

    'ending.AAA.title':   'she knew her',
    'ending.AAA.tagline': "She told you they were roommates at FIT. Lin Wei would come back from your shoots and not sleep for two days.",

    'ending.AAB.title':   "the same shoulder, the same marks",
    'ending.AAB.tagline': "Elena lowered her left strap. Three parallel red scratches on her shoulder. The same three Lin Wei had. The same place.",

    'ending.ABA.title':   'she leaves quietly',
    'ending.ABA.tagline': 'She nodded once. She left without speaking. You stood at the empty cyclorama and lit a cigarette you had not planned to light.',

    'ending.ABB.title':   'where she had been standing',
    'ending.ABB.tagline': "After the door closed you turned around. On the cyclorama where she had been standing: a fresh red handprint. Your hand has not touched that wall.",

    'ending.BAA.title':   'perfect mimicry',
    'ending.BAA.tagline': 'She held the pose exactly. The shutter caught her. You could publish it beside the original.',

    'ending.BAB.title':   "she moved through Lin Wei",
    'ending.BAB.tagline': "She held the first pose. Then her body kept moving without your direction — into the second pose, the third, the fourth. Every one of Lin Wei's poses, in order.",

    'ending.BBA.title':   'she made her own',
    'ending.BBA.tagline': "She thought for a beat and found a pose Lin Wei never made. Yours now. Hers now. The shutter caught it.",

    'ending.BBB.title':   'the one nobody saw',
    'ending.BBB.tagline': 'She knelt. One hand on the floor. Head down. That was the last frame Lin Wei made for you. You never developed it. You never showed it to anyone.',

    // ── UI ─────────────────────────────────────────────────────────────────
    'ui.replay':         'send the next girl in',
    'ui.ending_label':   'ending',
    'ui.sensual_label':  'sensual',
    'ui.horror_label':   'wrong',
    'ui.brand_sig':      'alteru · after dark',

    // ── Intro ──────────────────────────────────────────────────────────────
    'intro.title':   'the audition',
    'intro.hint':    "Six months after Lin Wei. A new model came with your photos of her. She brought her own white dress. Direct her — or send her away. Tap the lights or pick a phrase. Some endings end soft. Some have been here before.",
    'intro.cta':     'tap to begin',
  },

  zh: {
    'choice.ask_why':           '问她为什么来',
    'choice.tell_to_pose':      '让她走到 cyclorama',
    'choice.let_her_talk':      '让她说那批照片',
    'choice.show_her_door':     '送她到门口',
    'choice.copy_lin_wei':      "让她摆 Lin Wei 当时的姿势",
    'choice.find_own_pose':     '让她找自己的姿势',
    'choice.listen_deeper':     '听。让她讲完。',
    'choice.look_shoulder':     '看她的肩',
    'choice.let_her_go':        '让她走',
    'choice.look_at_wall':      '回头看那面白墙',
    'choice.shoot_it':          '按快门',
    'choice.wait_one_beat':     '再等一拍',
    'choice.trust_her':         '信任她要去的地方',
    'choice.ask_one_more':      '让她再来一个',

    'subtitle.A':   '我想让你像拍她那样拍我。',
    'subtitle.AA':  '这六个月我每晚都翻看这些照片。',
    'subtitle.AAA': '我们以前是 FIT 室友。她每次从你这儿拍完回去, 两天睡不着。',

    'ending.AAA.title':   '她认识她',
    'ending.AAA.tagline': '她说她们是 FIT 的室友。Lin Wei 每次从你这儿拍完回去, 两天睡不着。',

    'ending.AAB.title':   '同一肩, 同一道痕',
    'ending.AAB.tagline': 'Elena 把白色 strap 拉下肩。三道平行红色抓痕。跟 Lin Wei 当年同样三道。同样位置。',

    'ending.ABA.title':   '她安静地走了',
    'ending.ABA.tagline': '她点了一下头, 没说话就走了。你站在空 cyclorama 前点了根你本来不打算点的烟。',

    'ending.ABB.title':   '她刚才站过的地方',
    'ending.ABB.tagline': '关门后你转过头。cyclorama 上她刚才站的位置, 一只新鲜的红色手印。你的手没碰过那面墙。',

    'ending.BAA.title':   '一模一样',
    'ending.BAA.tagline': '她精准地复刻了那个姿势。快门接住了她。可以跟原作并排印。',

    'ending.BAB.title':   '她从 Lin Wei 身上走过',
    'ending.BAB.tagline': '她摆好第一个姿势。然后她的身体自己继续动 — 第二个, 第三个, 第四个。Lin Wei 当年每一个姿势, 按顺序。',

    'ending.BBA.title':   '她自己做的',
    'ending.BBA.tagline': '她想了一拍, 找到了一个 Lin Wei 没拍过的姿势。是你的。是她的。快门接住了它。',

    'ending.BBB.title':   '没人看过的那一张',
    'ending.BBB.tagline': '她跪下来。一手撑地。头垂着。那是 Lin Wei 最后给你的一帧。你没冲出来。你没给任何人看过。',

    'ui.replay':         '让下一个进来',
    'ui.ending_label':   '结局',
    'ui.sensual_label':  '感官',
    'ui.horror_label':   '不对劲',
    'ui.brand_sig':      'alteru · after dark',

    'intro.title':   '试镜',
    'intro.hint':    'Lin Wei 之后六个月。一个新模特带着你拍她的那批照片来。她带了她自己的白色丝裙。你指导她 — 或让她离开。点亮灯或选一句话。有的结局走向温柔。有的, 已经来过了。',
    'intro.cta':     '点屏幕开始',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE][key] ?? STRINGS.en[key] ?? key;
}

export function locale(): Locale { return LOCALE; }
