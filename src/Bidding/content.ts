// The Audition — node tree (15 nodes, 8 endings). Sequel to The Photographer.
//
//   root: Hana 立在你 cyclorama 棚, portfolio + Lin Wei 样张; 你的 Leica 在前景
//   ├── A "ask why she came"        🎙
//   │   ├── AA "let her talk about the photos"
//   │   │   ├── AAA "she knew Lin Wei"           → 💖 sensual (FIT 室友)
//   │   │   └── AAB "Lin Wei's same marks"       → 👹 horror (同样的抓痕)
//   │   └── AB "show her the door"
//   │       ├── ABA "she leaves quietly"         → 💖 sensual
//   │       └── ABB "handprint on the wall"      → 👹 horror
//   └── B "tell her to pose"        📸
//       ├── BA "copy Lin Wei's pose"
//       │   ├── BAA "perfect mimicry"            → 💖 sensual
//       │   └── BAB "the pose changes by itself" → 👹 horror
//       └── BB "find her own pose"
//           ├── BBA "she finds something new"    → 💖 sensual
//           └── BBB "the private one"            → 👹 horror

import type { EndingType, NodeDef, ChoiceDef } from './types';

export const ROOT_ID = 'root';

function parentOf(id: string): string | null {
  if (id === 'root') return null;
  if (id.length === 1) return 'root';
  return id.slice(0, -1);
}

function posterFor(id: string): string {
  const p = parentOf(id);
  return p ? `${p}_end.png` : 'root_start.png';
}

function branch(id: string, a: ChoiceDef, b: ChoiceDef, hasSubtitle = false): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    choices: [a, b],
    ...(hasSubtitle && { subtitleKey: `subtitle.${id}` }),
  };
}

function ending(id: string, type: EndingType, hasSubtitle = false): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    isEnding: true,
    endingType: type,
    endingTitleKey: `ending.${id}.title`,
    endingTaglineKey: `ending.${id}.tagline`,
    ...(hasSubtitle && { subtitleKey: `subtitle.${id}` }),
  };
}

const ch = (labelKey: string, nextId: string, pinX: number, pinY: number): ChoiceDef =>
  ({ labelKey, nextId, pinX, pinY });

export const NODES: Record<string, NodeDef> = {
  // root: Hana on cyclorama with portfolio. A pin = the photos in her hand; B pin = the cyclorama.
  root: branch('root',
    ch('choice.ask_why',        'A', 42, 55),
    ch('choice.tell_to_pose',   'B', 60, 40),
  ),

  // A: she shows you the photos. AA = let her talk; AB = show her the door.
  A: branch('A',
    ch('choice.let_her_talk',   'AA', 48, 60),
    ch('choice.show_her_door',  'AB', 25, 50),
    true,  // Elena: "I want you to shoot me like her"
  ),

  // B: she walked to the cyclorama. BA = copy Lin Wei; BB = find her own.
  B: branch('B',
    ch('choice.copy_lin_wei',   'BA', 50, 40),
    ch('choice.find_own_pose',  'BB', 50, 55),
  ),

  // AA: she's talking. AAA = listen (FIT roommate); AAB = look at her shoulder.
  AA: branch('AA',
    ch('choice.listen_deeper',  'AAA', 50, 40),
    ch('choice.look_shoulder',  'AAB', 38, 50),
    true,  // Elena: "I've looked at these every night for six months"
  ),

  // AB: at the door. ABA = let her go; ABB = look back at the wall.
  AB: branch('AB',
    ch('choice.let_her_go',     'ABA', 30, 50),
    ch('choice.look_at_wall',   'ABB', 60, 45),
  ),

  // BA: she copies Lin Wei's pose. BAA = shoot it; BAB = wait one beat.
  BA: branch('BA',
    ch('choice.shoot_it',       'BAA', 50, 45),
    ch('choice.wait_one_beat',  'BAB', 50, 35),
  ),

  // BB: she finds her own. BBA = trust where she goes; BBB = ask for one more.
  BB: branch('BB',
    ch('choice.trust_her',      'BBA', 50, 50),
    ch('choice.ask_one_more',   'BBB', 50, 40),
  ),

  // Layer 3 endings (4 sensual + 4 horror, all realistic register)
  AAA: ending('AAA', 'sensual', true),  // Elena: "we were roommates at FIT…"
  AAB: ending('AAB', 'horror'),
  ABA: ending('ABA', 'sensual'),
  ABB: ending('ABB', 'horror'),
  BAA: ending('BAA', 'sensual'),
  BAB: ending('BAB', 'horror'),
  BBA: ending('BBA', 'sensual'),
  BBB: ending('BBB', 'horror'),
};
