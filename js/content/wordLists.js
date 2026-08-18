// Exercise content, organized by target sound and stage. A grown-up judges
// correctness by ear (see exerciseScreen.js) - there's no automatic speech
// detection, so `segmentHint` is unused metadata left over from an earlier
// version and safe to ignore.

export const exercises = [
  // --- Zone: Starter Straightaway (isolated sounds only - real words start
  // right away in the next zone. No nonsense syllables: a strong reader gets
  // nothing out of drilling "sa/se/si" he can't attach meaning to.) ---
  {
    id: "s_isolated_hiss",
    sound: "s",
    stage: "isolated",
    text: "sssssss",
    prompt: "Rev your engine! Make your best snake hiss: ssssssss",
    segmentHint: "whole",
    zoneId: "starter-straightaway",
    icon: "🐍",
  },
  {
    id: "z_isolated_buzz",
    sound: "z",
    stage: "isolated",
    text: "zzzzzzz",
    prompt: "Now try a bee buzz: zzzzzzzz",
    segmentHint: "whole",
    zoneId: "starter-straightaway",
    icon: "🐝",
  },

  // --- Zone: Sibilant Speedway (words: initial / medial / final) ---
  { id: "s_initial_sun", sound: "s", stage: "initial", text: "sun", segmentHint: "start", zoneId: "sibilant-speedway", icon: "☀️" },
  { id: "s_initial_soap", sound: "s", stage: "initial", text: "soap", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🧼" },
  { id: "s_initial_sock", sound: "s", stage: "initial", text: "sock", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🧦" },
  { id: "s_initial_seven", sound: "s", stage: "initial", text: "seven", segmentHint: "start", zoneId: "sibilant-speedway", icon: "7️⃣" },
  { id: "s_initial_salad", sound: "s", stage: "initial", text: "salad", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🥗" },
  { id: "s_initial_sandwich", sound: "s", stage: "initial", text: "sandwich", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🥪" },
  { id: "s_initial_saw", sound: "s", stage: "initial", text: "saw", segmentHint: "start", zoneId: "sibilant-speedway", icon: "👀" },
  { id: "s_initial_sail", sound: "s", stage: "initial", text: "sail", segmentHint: "start", zoneId: "sibilant-speedway", icon: "⛵" },
  { id: "z_initial_zip", sound: "z", stage: "initial", text: "zip", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🤐" },
  { id: "z_initial_zoo", sound: "z", stage: "initial", text: "zoo", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🦁" },
  { id: "z_initial_zebra", sound: "z", stage: "initial", text: "zebra", segmentHint: "start", zoneId: "sibilant-speedway", icon: "🦓" },
  { id: "z_initial_zero", sound: "z", stage: "initial", text: "zero", segmentHint: "start", zoneId: "sibilant-speedway", icon: "0️⃣" },
  { id: "z_initial_zigzag", sound: "z", stage: "initial", text: "zigzag", segmentHint: "start", zoneId: "sibilant-speedway", icon: "⚡" },

  { id: "s_medial_whisper", sound: "s", stage: "medial", text: "whisper", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "🤫" },
  { id: "s_medial_lesson", sound: "s", stage: "medial", text: "lesson", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "📚" },
  { id: "s_medial_messy", sound: "s", stage: "medial", text: "messy", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "🧦" },
  { id: "s_medial_baseball", sound: "s", stage: "medial", text: "baseball", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "⚾" },
  { id: "s_medial_basket", sound: "s", stage: "medial", text: "basket", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "🧺" },
  { id: "s_medial_outside", sound: "s", stage: "medial", text: "outside", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "🌳" },
  { id: "z_medial_pizza", sound: "z", stage: "medial", text: "pizza", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "🍕" },
  { id: "z_medial_lazy", sound: "z", stage: "medial", text: "lazy", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "😴" },
  { id: "z_medial_cousin", sound: "z", stage: "medial", text: "cousin", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "👧" },
  { id: "z_medial_dizzy", sound: "z", stage: "medial", text: "dizzy", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "💫" },
  { id: "z_medial_music", sound: "z", stage: "medial", text: "music", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "🎵" },
  { id: "z_medial_easy", sound: "z", stage: "medial", text: "easy", segmentHint: "scan", zoneId: "sibilant-speedway", icon: "👍" },

  { id: "s_final_bus", sound: "s", stage: "final", text: "bus", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🚌" },
  { id: "s_final_grass", sound: "s", stage: "final", text: "grass", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🌱" },
  { id: "s_final_dress", sound: "s", stage: "final", text: "dress", segmentHint: "end", zoneId: "sibilant-speedway", icon: "👕" },
  { id: "s_final_glass", sound: "s", stage: "final", text: "glass", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🥛" },
  { id: "s_final_mouse", sound: "s", stage: "final", text: "mouse", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🐭" },
  { id: "s_final_juice", sound: "s", stage: "final", text: "juice", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🧃" },
  { id: "z_final_nose", sound: "z", stage: "final", text: "nose", segmentHint: "end", zoneId: "sibilant-speedway", icon: "👃" },
  { id: "z_final_cheese", sound: "z", stage: "final", text: "cheese", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🧀" },
  { id: "z_final_buzz", sound: "z", stage: "final", text: "buzz", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🐝" },
  { id: "z_final_shoes", sound: "z", stage: "final", text: "shoes", segmentHint: "end", zoneId: "sibilant-speedway", icon: "👟" },
  { id: "z_final_eyes", sound: "z", stage: "final", text: "eyes", segmentHint: "end", zoneId: "sibilant-speedway", icon: "👀" },
  { id: "z_final_trees", sound: "z", stage: "final", text: "trees", segmentHint: "end", zoneId: "sibilant-speedway", icon: "🌲" },

  // --- Zone: Blend Bridge (consonant blends) ---
  { id: "s_blend_st_star", sound: "s", stage: "blend", blend: "st", text: "star", segmentHint: "start", zoneId: "blend-bridge", icon: "⭐" },
  { id: "s_blend_st_stop", sound: "s", stage: "blend", blend: "st", text: "stop", segmentHint: "start", zoneId: "blend-bridge", icon: "🛑" },
  { id: "s_blend_st_stair", sound: "s", stage: "blend", blend: "st", text: "stairs", segmentHint: "start", zoneId: "blend-bridge", icon: "🪜" },
  { id: "s_blend_sp_spoon", sound: "s", stage: "blend", blend: "sp", text: "spoon", segmentHint: "start", zoneId: "blend-bridge", icon: "🥄" },
  { id: "s_blend_sp_spider", sound: "s", stage: "blend", blend: "sp", text: "spider", segmentHint: "start", zoneId: "blend-bridge", icon: "🕷️" },
  { id: "s_blend_sp_space", sound: "s", stage: "blend", blend: "sp", text: "space", segmentHint: "start", zoneId: "blend-bridge", icon: "🚀" },
  { id: "s_blend_sn_snake", sound: "s", stage: "blend", blend: "sn", text: "snake", segmentHint: "start", zoneId: "blend-bridge", icon: "🐍" },
  { id: "s_blend_sn_snow", sound: "s", stage: "blend", blend: "sn", text: "snow", segmentHint: "start", zoneId: "blend-bridge", icon: "❄️" },
  { id: "s_blend_sn_snail", sound: "s", stage: "blend", blend: "sn", text: "snail", segmentHint: "start", zoneId: "blend-bridge", icon: "🐌" },
  { id: "s_blend_sl_sleep", sound: "s", stage: "blend", blend: "sl", text: "sleep", segmentHint: "start", zoneId: "blend-bridge", icon: "😴" },
  { id: "s_blend_sl_slide", sound: "s", stage: "blend", blend: "sl", text: "slide", segmentHint: "start", zoneId: "blend-bridge", icon: "🛝" },
  { id: "s_blend_sl_sled", sound: "s", stage: "blend", blend: "sl", text: "sled", segmentHint: "start", zoneId: "blend-bridge", icon: "🛷" },
  { id: "s_blend_sk_sky", sound: "s", stage: "blend", blend: "sk", text: "sky", segmentHint: "start", zoneId: "blend-bridge", icon: "🌤️" },
  { id: "s_blend_sk_skate", sound: "s", stage: "blend", blend: "sk", text: "skate", segmentHint: "start", zoneId: "blend-bridge", icon: "⛸️" },
  { id: "s_blend_sk_school", sound: "s", stage: "blend", blend: "sk", text: "school", segmentHint: "start", zoneId: "blend-bridge", icon: "🏫" },
  { id: "s_blend_sm_smile", sound: "s", stage: "blend", blend: "sm", text: "smile", segmentHint: "start", zoneId: "blend-bridge", icon: "😄" },
  { id: "s_blend_sm_smell", sound: "s", stage: "blend", blend: "sm", text: "smell", segmentHint: "start", zoneId: "blend-bridge", icon: "👃" },
  { id: "s_blend_sm_small", sound: "s", stage: "blend", blend: "sm", text: "small", segmentHint: "start", zoneId: "blend-bridge", icon: "🐜" },

  // --- Zone: Sentence Summit (phrases + sentences) ---
  { id: "s_phrase_1", sound: "s", stage: "phrase", text: "a fast race car", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🏎️" },
  { id: "s_phrase_2", sound: "s", stage: "phrase", text: "six silly seals", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🦭" },
  { id: "s_phrase_3", sound: "s", stage: "phrase", text: "a super spaceship", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🚀" },
  { id: "s_sentence_1", sound: "s", stage: "sentence", text: "Sam saw a super fast car.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🚗" },
  { id: "s_sentence_2", sound: "s", stage: "sentence", text: "The sun is up in the sky.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "☀️" },
  { id: "s_sentence_3", sound: "s", stage: "sentence", text: "Six race cars zoomed past us.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🏁" },
  { id: "s_sentence_4", sound: "s", stage: "sentence", text: "The silly snake slid down the slide.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🐍" },
  { id: "s_sentence_5", sound: "s", stage: "sentence", text: "Sam's sister sees seven stars.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "⭐" },
  { id: "z_sentence_1", sound: "z", stage: "sentence", text: "The zebra zoomed to the zoo.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🦓" },
  { id: "z_sentence_2", sound: "z", stage: "sentence", text: "Zoe zipped up her backpack.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🎒" },
  { id: "z_sentence_3", sound: "z", stage: "sentence", text: "The bus zoomed past the zoo.", segmentHint: "scan-multi", zoneId: "sentence-summit", icon: "🚌" },

  // --- Zone: Twister Turnpike (boss level, real tongue twisters, genuinely /s/ not /sh/) ---
  { id: "s_twister_1", sound: "s", stage: "tongue-twister", text: "Sally sells six slippery snakes.", segmentHint: "scan-multi", zoneId: "twister-turnpike-boss", isBoss: true, icon: "🐍" },
  { id: "s_twister_2", sound: "s", stage: "tongue-twister", text: "Susie's snake slides past six sleepy seals.", segmentHint: "scan-multi", zoneId: "twister-turnpike-boss", isBoss: true, icon: "🦭" },
  { id: "s_twister_3", sound: "s", stage: "tongue-twister", text: "Some silly race cars speed past the stop sign.", segmentHint: "scan-multi", zoneId: "twister-turnpike-boss", isBoss: true, icon: "🏁" },
  { id: "s_twister_4", sound: "s", stage: "tongue-twister", text: "Six sleepy seals slide on the snow.", segmentHint: "scan-multi", zoneId: "twister-turnpike-boss", isBoss: true, icon: "🦭" },
  { id: "s_twister_5", sound: "s", stage: "tongue-twister", text: "Stan's silver spaceship soars past the stars.", segmentHint: "scan-multi", zoneId: "twister-turnpike-boss", isBoss: true, icon: "🚀" },

  // --- Zone: Bonus Road (R sounds - lower confidence, always accessible) ---
  { id: "r_isolated", sound: "r", stage: "isolated", text: "rrrrrr", prompt: "Growl like a race car engine: rrrrrr", segmentHint: "whole", zoneId: "bonus-road", icon: "🚗" },
  { id: "r_initial_rabbit", sound: "r", stage: "initial", text: "rabbit", segmentHint: "start", zoneId: "bonus-road", icon: "🐰" },
  { id: "r_initial_red", sound: "r", stage: "initial", text: "red", segmentHint: "start", zoneId: "bonus-road", icon: "🟥" },
  { id: "r_initial_run", sound: "r", stage: "initial", text: "run", segmentHint: "start", zoneId: "bonus-road", icon: "🏃" },
  { id: "r_initial_rainbow", sound: "r", stage: "initial", text: "rainbow", segmentHint: "start", zoneId: "bonus-road", icon: "🌈" },
  { id: "r_initial_road", sound: "r", stage: "initial", text: "road", segmentHint: "start", zoneId: "bonus-road", icon: "🛣️" },
  { id: "r_initial_race", sound: "r", stage: "initial", text: "race", segmentHint: "start", zoneId: "bonus-road", icon: "🏁" },
  { id: "r_initial_rock", sound: "r", stage: "initial", text: "rock", segmentHint: "start", zoneId: "bonus-road", icon: "🪨" },
  { id: "r_sentence_1", sound: "r", stage: "sentence", text: "The red rabbit ran really fast.", segmentHint: "scan-multi", zoneId: "bonus-road", icon: "🐰" },
  { id: "r_sentence_2", sound: "r", stage: "sentence", text: "Rabbits race down the road.", segmentHint: "scan-multi", zoneId: "bonus-road", icon: "🐰" },

  // --- Zone: Jungle Junction (J sounds - no isolated stage, /dʒ/ is a quick
  // stop+buzz burst rather than something you can sustain like "sss") ---
  { id: "j_initial_jump", sound: "j", stage: "initial", text: "jump", segmentHint: "start", zoneId: "jungle-junction", icon: "🤸" },
  { id: "j_initial_jelly", sound: "j", stage: "initial", text: "jelly", segmentHint: "start", zoneId: "jungle-junction", icon: "🍮" },
  { id: "j_initial_jacket", sound: "j", stage: "initial", text: "jacket", segmentHint: "start", zoneId: "jungle-junction", icon: "🧥" },
  { id: "j_initial_jungle", sound: "j", stage: "initial", text: "jungle", segmentHint: "start", zoneId: "jungle-junction", icon: "🌴" },
  { id: "j_initial_jar", sound: "j", stage: "initial", text: "jar", segmentHint: "start", zoneId: "jungle-junction", icon: "🫙" },
  { id: "j_initial_jeep", sound: "j", stage: "initial", text: "jeep", segmentHint: "start", zoneId: "jungle-junction", icon: "🚙" },
  { id: "j_initial_jet", sound: "j", stage: "initial", text: "jet", segmentHint: "start", zoneId: "jungle-junction", icon: "✈️" },
  { id: "j_initial_juggle", sound: "j", stage: "initial", text: "juggle", segmentHint: "start", zoneId: "jungle-junction", icon: "🤹" },
  { id: "j_medial_pajamas", sound: "j", stage: "medial", text: "pajamas", segmentHint: "scan", zoneId: "jungle-junction", icon: "🛌" },
  { id: "j_medial_magic", sound: "j", stage: "medial", text: "magic", segmentHint: "scan", zoneId: "jungle-junction", icon: "🪄" },
  { id: "j_medial_engine", sound: "j", stage: "medial", text: "engine", segmentHint: "scan", zoneId: "jungle-junction", icon: "🚗" },
  { id: "j_final_cage", sound: "j", stage: "final", text: "cage", segmentHint: "end", zoneId: "jungle-junction", icon: "🦜" },
  { id: "j_final_page", sound: "j", stage: "final", text: "page", segmentHint: "end", zoneId: "jungle-junction", icon: "📄" },
  { id: "j_final_bridge", sound: "j", stage: "final", text: "bridge", segmentHint: "end", zoneId: "jungle-junction", icon: "🌉" },
  { id: "j_final_orange", sound: "j", stage: "final", text: "orange", segmentHint: "end", zoneId: "jungle-junction", icon: "🍊" },
  { id: "j_final_large", sound: "j", stage: "final", text: "large", segmentHint: "end", zoneId: "jungle-junction", icon: "🐘" },
  { id: "j_sentence_1", sound: "j", stage: "sentence", text: "Jack jumped in the jeep.", segmentHint: "scan-multi", zoneId: "jungle-junction", icon: "🚙" },
  { id: "j_sentence_2", sound: "j", stage: "sentence", text: "The jolly giant juggles jars.", segmentHint: "scan-multi", zoneId: "jungle-junction", icon: "🤹" },
  { id: "j_sentence_3", sound: "j", stage: "sentence", text: "The orange bridge is large and huge.", segmentHint: "scan-multi", zoneId: "jungle-junction", icon: "🌉" },

  // --- Zone: Cheetah Chase (CH sounds - no isolated stage, same reason as J) ---
  { id: "ch_initial_choochoo", sound: "ch", stage: "initial", text: "choo-choo", segmentHint: "start", zoneId: "cheetah-chase", icon: "🚂" },
  { id: "ch_initial_chip", sound: "ch", stage: "initial", text: "chip", segmentHint: "start", zoneId: "cheetah-chase", icon: "🍟" },
  { id: "ch_initial_chair", sound: "ch", stage: "initial", text: "chair", segmentHint: "start", zoneId: "cheetah-chase", icon: "🪑" },
  { id: "ch_initial_cherry", sound: "ch", stage: "initial", text: "cherry", segmentHint: "start", zoneId: "cheetah-chase", icon: "🍒" },
  { id: "ch_initial_cheetah", sound: "ch", stage: "initial", text: "cheetah", segmentHint: "start", zoneId: "cheetah-chase", icon: "🐆" },
  { id: "ch_initial_chicken", sound: "ch", stage: "initial", text: "chicken", segmentHint: "start", zoneId: "cheetah-chase", icon: "🐔" },
  { id: "ch_initial_chalk", sound: "ch", stage: "initial", text: "chalk", segmentHint: "start", zoneId: "cheetah-chase", icon: "🖍️" },
  { id: "ch_medial_kitchen", sound: "ch", stage: "medial", text: "kitchen", segmentHint: "scan", zoneId: "cheetah-chase", icon: "🍳" },
  { id: "ch_medial_teacher", sound: "ch", stage: "medial", text: "teacher", segmentHint: "scan", zoneId: "cheetah-chase", icon: "🍎" },
  { id: "ch_medial_picture", sound: "ch", stage: "medial", text: "picture", segmentHint: "scan", zoneId: "cheetah-chase", icon: "🖼️" },
  { id: "ch_final_beach", sound: "ch", stage: "final", text: "beach", segmentHint: "end", zoneId: "cheetah-chase", icon: "🏖️" },
  { id: "ch_final_watch", sound: "ch", stage: "final", text: "watch", segmentHint: "end", zoneId: "cheetah-chase", icon: "⌚" },
  { id: "ch_final_lunch", sound: "ch", stage: "final", text: "lunch", segmentHint: "end", zoneId: "cheetah-chase", icon: "🥪" },
  { id: "ch_final_bench", sound: "ch", stage: "final", text: "bench", segmentHint: "end", zoneId: "cheetah-chase", icon: "🪑" },
  { id: "ch_final_peach", sound: "ch", stage: "final", text: "peach", segmentHint: "end", zoneId: "cheetah-chase", icon: "🍑" },
  { id: "ch_sentence_1", sound: "ch", stage: "sentence", text: "The cheetah chases the chicken.", segmentHint: "scan-multi", zoneId: "cheetah-chase", icon: "🐆" },
  { id: "ch_sentence_2", sound: "ch", stage: "sentence", text: "Chip watches the choo-choo train.", segmentHint: "scan-multi", zoneId: "cheetah-chase", icon: "🚂" },
  { id: "ch_sentence_3", sound: "ch", stage: "sentence", text: "The teacher eats a peach at lunch.", segmentHint: "scan-multi", zoneId: "cheetah-chase", icon: "🍑" },

  // --- Zone: Speedy S Sprint (more S - final blends like -st/-sk/-sp) ---
  { id: "s_sprint_fast", sound: "s", stage: "final", text: "fast", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "🏎️" },
  { id: "s_sprint_desk", sound: "s", stage: "final", text: "desk", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "🪑" },
  { id: "s_sprint_mask", sound: "s", stage: "final", text: "mask", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "🎭" },
  { id: "s_sprint_nest", sound: "s", stage: "final", text: "nest", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "🪺" },
  { id: "s_sprint_best", sound: "s", stage: "final", text: "best", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "🥇" },
  { id: "s_sprint_test", sound: "s", stage: "final", text: "test", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "📝" },
  { id: "s_sprint_list", sound: "s", stage: "final", text: "list", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "📋" },
  { id: "s_sprint_rest", sound: "s", stage: "final", text: "rest", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "😴" },
  { id: "s_sprint_twist", sound: "s", stage: "final", text: "twist", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "🌀" },
  { id: "s_sprint_wrist", sound: "s", stage: "final", text: "wrist", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "⌚" },
  { id: "s_sprint_past", sound: "s", stage: "final", text: "past", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "⏳" },
  { id: "s_sprint_just", sound: "s", stage: "final", text: "just", segmentHint: "end", zoneId: "speedy-s-sprint", icon: "👍" },
  { id: "s_sprint_sentence_1", sound: "s", stage: "sentence", text: "The fast car zoomed past us.", segmentHint: "scan-multi", zoneId: "speedy-s-sprint", icon: "🏎️" },
  { id: "s_sprint_sentence_2", sound: "s", stage: "sentence", text: "Just rest before the big test.", segmentHint: "scan-multi", zoneId: "speedy-s-sprint", icon: "📝" },
  { id: "s_sprint_sentence_3", sound: "s", stage: "sentence", text: "The best desk has the least mess.", segmentHint: "scan-multi", zoneId: "speedy-s-sprint", icon: "🪑" },

  // --- Zone: Zebra Zone (more Z - including plural -s/-z endings) ---
  { id: "z_zone_size", sound: "z", stage: "final", text: "size", segmentHint: "end", zoneId: "zebra-zone", icon: "📏" },
  { id: "z_zone_prize", sound: "z", stage: "final", text: "prize", segmentHint: "end", zoneId: "zebra-zone", icon: "🏅" },
  { id: "z_zone_surprise", sound: "z", stage: "final", text: "surprise", segmentHint: "end", zoneId: "zebra-zone", icon: "🎁" },
  { id: "z_zone_freeze", sound: "z", stage: "final", text: "freeze", segmentHint: "end", zoneId: "zebra-zone", icon: "🧊" },
  { id: "z_zone_sneeze", sound: "z", stage: "final", text: "sneeze", segmentHint: "end", zoneId: "zebra-zone", icon: "🤧" },
  { id: "z_zone_breeze", sound: "z", stage: "final", text: "breeze", segmentHint: "end", zoneId: "zebra-zone", icon: "🍃" },
  { id: "z_zone_please", sound: "z", stage: "final", text: "please", segmentHint: "end", zoneId: "zebra-zone", icon: "🙏" },
  { id: "z_zone_roses", sound: "z", stage: "final", text: "roses", segmentHint: "end", zoneId: "zebra-zone", icon: "🌹" },
  { id: "z_zone_cars", sound: "z", stage: "final", text: "cars", segmentHint: "end", zoneId: "zebra-zone", icon: "🚗" },
  { id: "z_zone_bees", sound: "z", stage: "final", text: "bees", segmentHint: "end", zoneId: "zebra-zone", icon: "🐝" },
  { id: "z_zone_wheels", sound: "z", stage: "final", text: "wheels", segmentHint: "end", zoneId: "zebra-zone", icon: "🛞" },
  { id: "z_zone_keys", sound: "z", stage: "final", text: "keys", segmentHint: "end", zoneId: "zebra-zone", icon: "🔑" },
  { id: "z_zone_toys", sound: "z", stage: "final", text: "toys", segmentHint: "end", zoneId: "zebra-zone", icon: "🧸" },
  { id: "z_zone_sentence_1", sound: "z", stage: "sentence", text: "Zoe's roses are a nice surprise.", segmentHint: "scan-multi", zoneId: "zebra-zone", icon: "🌹" },
  { id: "z_zone_sentence_2", sound: "z", stage: "sentence", text: "The bees buzz near the trees.", segmentHint: "scan-multi", zoneId: "zebra-zone", icon: "🐝" },
  { id: "z_zone_sentence_3", sound: "z", stage: "sentence", text: "Please freeze before you sneeze.", segmentHint: "scan-multi", zoneId: "zebra-zone", icon: "🧊" },

  // --- Zone: Rally Rabbit Road (more R) ---
  { id: "r_rally_rain", sound: "r", stage: "initial", text: "rain", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🌧️" },
  { id: "r_rally_river", sound: "r", stage: "initial", text: "river", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🏞️" },
  { id: "r_rally_rope", sound: "r", stage: "initial", text: "rope", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🪢" },
  { id: "r_rally_roar", sound: "r", stage: "initial", text: "roar", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🦁" },
  { id: "r_rally_robot", sound: "r", stage: "initial", text: "robot", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🤖" },
  { id: "r_rally_rocket", sound: "r", stage: "initial", text: "rocket", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🚀" },
  { id: "r_rally_ride", sound: "r", stage: "initial", text: "ride", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🎢" },
  { id: "r_rally_round", sound: "r", stage: "initial", text: "round", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "⭕" },
  { id: "r_rally_row", sound: "r", stage: "initial", text: "row", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🚣" },
  { id: "r_rally_rug", sound: "r", stage: "initial", text: "rug", segmentHint: "start", zoneId: "rally-rabbit-road", icon: "🟪" },
  { id: "r_rally_sentence_1", sound: "r", stage: "sentence", text: "The robot rides in the rocket.", segmentHint: "scan-multi", zoneId: "rally-rabbit-road", icon: "🤖" },
  { id: "r_rally_sentence_2", sound: "r", stage: "sentence", text: "Rain falls on the river road.", segmentHint: "scan-multi", zoneId: "rally-rabbit-road", icon: "🌧️" },

  // --- Zone: Jungle Jamboree (more J) ---
  { id: "j_jamboree_giraffe", sound: "j", stage: "initial", text: "giraffe", segmentHint: "start", zoneId: "jungle-jamboree", icon: "🦒" },
  { id: "j_jamboree_gym", sound: "j", stage: "initial", text: "gym", segmentHint: "start", zoneId: "jungle-jamboree", icon: "🏋️" },
  { id: "j_jamboree_gem", sound: "j", stage: "initial", text: "gem", segmentHint: "start", zoneId: "jungle-jamboree", icon: "💎" },
  { id: "j_jamboree_giant", sound: "j", stage: "initial", text: "giant", segmentHint: "start", zoneId: "jungle-jamboree", icon: "🧌" },
  { id: "j_jamboree_danger", sound: "j", stage: "initial", text: "danger", segmentHint: "start", zoneId: "jungle-jamboree", icon: "⚠️" },
  { id: "j_jamboree_badge", sound: "j", stage: "final", text: "badge", segmentHint: "end", zoneId: "jungle-jamboree", icon: "🎖️" },
  { id: "j_jamboree_fudge", sound: "j", stage: "final", text: "fudge", segmentHint: "end", zoneId: "jungle-jamboree", icon: "🍫" },
  { id: "j_jamboree_edge", sound: "j", stage: "final", text: "edge", segmentHint: "end", zoneId: "jungle-jamboree", icon: "📐" },
  { id: "j_jamboree_jog", sound: "j", stage: "initial", text: "jog", segmentHint: "start", zoneId: "jungle-jamboree", icon: "🏃" },
  { id: "j_jamboree_joy", sound: "j", stage: "initial", text: "joy", segmentHint: "start", zoneId: "jungle-jamboree", icon: "😊" },
  { id: "j_jamboree_jam", sound: "j", stage: "initial", text: "jam", segmentHint: "start", zoneId: "jungle-jamboree", icon: "🍓" },
  { id: "j_jamboree_sentence_1", sound: "j", stage: "sentence", text: "The giant giraffe jogs for joy.", segmentHint: "scan-multi", zoneId: "jungle-jamboree", icon: "🦒" },
  { id: "j_jamboree_sentence_2", sound: "j", stage: "sentence", text: "Jenny's badge is a shiny gem.", segmentHint: "scan-multi", zoneId: "jungle-jamboree", icon: "💎" },

  // --- Zone: Chatterbox Chase (more CH) ---
  { id: "ch_chatter_chin", sound: "ch", stage: "initial", text: "chin", segmentHint: "start", zoneId: "chatterbox-chase", icon: "😗" },
  { id: "ch_chatter_cheek", sound: "ch", stage: "initial", text: "cheek", segmentHint: "start", zoneId: "chatterbox-chase", icon: "😊" },
  { id: "ch_chatter_child", sound: "ch", stage: "initial", text: "child", segmentHint: "start", zoneId: "chatterbox-chase", icon: "🧒" },
  { id: "ch_chatter_chill", sound: "ch", stage: "initial", text: "chill", segmentHint: "start", zoneId: "chatterbox-chase", icon: "🥶" },
  { id: "ch_chatter_much", sound: "ch", stage: "final", text: "much", segmentHint: "end", zoneId: "chatterbox-chase", icon: "🙌" },
  { id: "ch_chatter_such", sound: "ch", stage: "final", text: "such", segmentHint: "end", zoneId: "chatterbox-chase", icon: "✨" },
  { id: "ch_chatter_rich", sound: "ch", stage: "final", text: "rich", segmentHint: "end", zoneId: "chatterbox-chase", icon: "💰" },
  { id: "ch_chatter_witch", sound: "ch", stage: "final", text: "witch", segmentHint: "end", zoneId: "chatterbox-chase", icon: "🧙" },
  { id: "ch_chatter_match", sound: "ch", stage: "final", text: "match", segmentHint: "end", zoneId: "chatterbox-chase", icon: "🔥" },
  { id: "ch_chatter_catch", sound: "ch", stage: "final", text: "catch", segmentHint: "end", zoneId: "chatterbox-chase", icon: "🧤" },
  { id: "ch_chatter_touch", sound: "ch", stage: "final", text: "touch", segmentHint: "end", zoneId: "chatterbox-chase", icon: "✋" },
  { id: "ch_chatter_branch", sound: "ch", stage: "final", text: "branch", segmentHint: "end", zoneId: "chatterbox-chase", icon: "🌿" },
  { id: "ch_chatter_sentence_1", sound: "ch", stage: "sentence", text: "The child will catch and touch the branch.", segmentHint: "scan-multi", zoneId: "chatterbox-chase", icon: "🌿" },
  { id: "ch_chatter_sentence_2", sound: "ch", stage: "sentence", text: "Much chocolate makes children cheerful.", segmentHint: "scan-multi", zoneId: "chatterbox-chase", icon: "🍫" },

  // --- Zone: Mixed-Up Motorway (review mix of S/Z/J/CH/R) ---
  { id: "mix_sun", sound: "s", stage: "initial", text: "sun", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "☀️" },
  { id: "mix_snake", sound: "s", stage: "blend", blend: "sn", text: "snake", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🐍" },
  { id: "mix_bus", sound: "s", stage: "final", text: "bus", segmentHint: "end", zoneId: "mixed-up-motorway", icon: "🚌" },
  { id: "mix_zoo", sound: "z", stage: "initial", text: "zoo", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🦁" },
  { id: "mix_zebra", sound: "z", stage: "initial", text: "zebra", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🦓" },
  { id: "mix_buzz", sound: "z", stage: "final", text: "buzz", segmentHint: "end", zoneId: "mixed-up-motorway", icon: "🐝" },
  { id: "mix_jump", sound: "j", stage: "initial", text: "jump", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🤸" },
  { id: "mix_jelly", sound: "j", stage: "initial", text: "jelly", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🍮" },
  { id: "mix_chip", sound: "ch", stage: "initial", text: "chip", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🍟" },
  { id: "mix_chair", sound: "ch", stage: "initial", text: "chair", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🪑" },
  { id: "mix_red", sound: "r", stage: "initial", text: "red", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🟥" },
  { id: "mix_rainbow", sound: "r", stage: "initial", text: "rainbow", segmentHint: "start", zoneId: "mixed-up-motorway", icon: "🌈" },
  { id: "mix_sentence_1", sound: "z", stage: "sentence", text: "The zebra jumps over the red chair.", segmentHint: "scan-multi", zoneId: "mixed-up-motorway", icon: "🦓" },
  { id: "mix_sentence_2", sound: "s", stage: "sentence", text: "Sam's snake chases the jolly rabbit.", segmentHint: "scan-multi", zoneId: "mixed-up-motorway", icon: "🐍" },

  // --- Zone: Silly Sentence Speedway (more mixed sentences) ---
  { id: "silly_sentence_1", sound: "s", stage: "sentence", text: "The silly zebra races past six geese.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🦓" },
  { id: "silly_sentence_2", sound: "j", stage: "sentence", text: "Jack's jeep zooms past the chatty cheetah.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🚙" },
  { id: "silly_sentence_3", sound: "s", stage: "sentence", text: "Sam's sister sees a super surprise.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🎁" },
  { id: "silly_sentence_4", sound: "r", stage: "sentence", text: "The rabbit runs past the red rocket.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🐰" },
  { id: "silly_sentence_5", sound: "ch", stage: "sentence", text: "Chip chews on chewy cherry chunks.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🍒" },
  { id: "silly_sentence_6", sound: "j", stage: "sentence", text: "The giant jungle giraffe juggles jars.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🦒" },
  { id: "silly_sentence_7", sound: "s", stage: "sentence", text: "Six sleepy seals slide past the snow.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🦭" },
  { id: "silly_sentence_8", sound: "z", stage: "sentence", text: "The zebra zips past the jazzy jeep.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🦓" },
  { id: "silly_sentence_9", sound: "r", stage: "sentence", text: "Rachel's robot races around the rug.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🤖" },
  { id: "silly_sentence_10", sound: "ch", stage: "sentence", text: "Chester chats with the cheerful chicken.", segmentHint: "scan-multi", zoneId: "silly-sentence-speedway", icon: "🐔" },

  // --- Zone: Twister Town (boss - tongue twisters across all sounds) ---
  { id: "twister_town_1", sound: "z", stage: "tongue-twister", text: "Zoe's zebra zips zigzag through the zoo.", segmentHint: "scan-multi", zoneId: "twister-town", isBoss: true, icon: "🦓" },
  { id: "twister_town_2", sound: "j", stage: "tongue-twister", text: "Jack juggles jelly jars in the jungle.", segmentHint: "scan-multi", zoneId: "twister-town", isBoss: true, icon: "🍮" },
  { id: "twister_town_3", sound: "ch", stage: "tongue-twister", text: "Cheeky cheetahs chase chatty chickens.", segmentHint: "scan-multi", zoneId: "twister-town", isBoss: true, icon: "🐆" },
  { id: "twister_town_4", sound: "s", stage: "tongue-twister", text: "Sally's silly snake slides slowly past six seals.", segmentHint: "scan-multi", zoneId: "twister-town", isBoss: true, icon: "🐍" },
  { id: "twister_town_5", sound: "r", stage: "tongue-twister", text: "Rachel's rabbit runs round and round the road.", segmentHint: "scan-multi", zoneId: "twister-town", isBoss: true, icon: "🐰" },

  // --- Zone: Pit Crew Practice (medial position, all sounds) ---
  { id: "pit_crew_listen", sound: "s", stage: "medial", text: "listen", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "👂" },
  { id: "pit_crew_whistle", sound: "s", stage: "medial", text: "whistle", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "😗" },
  { id: "pit_crew_reason", sound: "z", stage: "medial", text: "reason", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🤔" },
  { id: "pit_crew_season", sound: "z", stage: "medial", text: "season", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🍂" },
  { id: "pit_crew_pigeon", sound: "j", stage: "medial", text: "pigeon", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🐦" },
  { id: "pit_crew_budget", sound: "j", stage: "medial", text: "budget", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "💰" },
  { id: "pit_crew_matches", sound: "ch", stage: "medial", text: "matches", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🔥" },
  { id: "pit_crew_picture", sound: "ch", stage: "medial", text: "picture", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🖼️" },
  { id: "pit_crew_arrow", sound: "r", stage: "medial", text: "arrow", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🏹" },
  { id: "pit_crew_carrot", sound: "r", stage: "medial", text: "carrot", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🥕" },
  { id: "pit_crew_parrot", sound: "r", stage: "medial", text: "parrot", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "🦜" },
  { id: "pit_crew_very", sound: "r", stage: "medial", text: "very", segmentHint: "scan", zoneId: "pit-crew-practice", icon: "👍" },
  { id: "pit_crew_sentence_1", sound: "s", stage: "sentence", text: "Listen carefully during this season.", segmentHint: "scan-multi", zoneId: "pit-crew-practice", icon: "👂" },
  { id: "pit_crew_sentence_2", sound: "r", stage: "sentence", text: "The parrot carries a carrot very carefully.", segmentHint: "scan-multi", zoneId: "pit-crew-practice", icon: "🦜" },

  // --- Zone: Championship Circuit (grand finale boss) ---
  { id: "championship_1", sound: "z", stage: "tongue-twister", text: "The giant zebra juggles jelly jars past six silly seals.", segmentHint: "scan-multi", zoneId: "championship-circuit", isBoss: true, icon: "🦓" },
  { id: "championship_2", sound: "ch", stage: "tongue-twister", text: "Chatty cheetahs chase red rockets around the rally road.", segmentHint: "scan-multi", zoneId: "championship-circuit", isBoss: true, icon: "🐆" },
  { id: "championship_3", sound: "s", stage: "tongue-twister", text: "Sam's silver spaceship zooms past the jungle's giant bridge.", segmentHint: "scan-multi", zoneId: "championship-circuit", isBoss: true, icon: "🚀" },
  { id: "championship_4", sound: "j", stage: "tongue-twister", text: "The rich witch catches seven surprising jewels.", segmentHint: "scan-multi", zoneId: "championship-circuit", isBoss: true, icon: "💎" },
  { id: "championship_5", sound: "r", stage: "tongue-twister", text: "Rachel's robot races the rally car around the racetrack.", segmentHint: "scan-multi", zoneId: "championship-circuit", isBoss: true, icon: "🏆" },

  // --- Zone: Sunshine Sprint (more S initial - including "soft C" words
  // that make the /s/ sound, like "cent" and "city") ---
  { id: "sunshine_sea", sound: "s", stage: "initial", text: "sea", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🌊" },
  { id: "sunshine_seed", sound: "s", stage: "initial", text: "seed", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🌱" },
  { id: "sunshine_silk", sound: "s", stage: "initial", text: "silk", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🧵" },
  { id: "sunshine_sink", sound: "s", stage: "initial", text: "sink", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🚰" },
  { id: "sunshine_sofa", sound: "s", stage: "initial", text: "sofa", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🛋️" },
  { id: "sunshine_soup", sound: "s", stage: "initial", text: "soup", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🍲" },
  { id: "sunshine_south", sound: "s", stage: "initial", text: "south", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🧭" },
  { id: "sunshine_cent", sound: "s", stage: "initial", text: "cent", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🪙" },
  { id: "sunshine_city", sound: "s", stage: "initial", text: "city", segmentHint: "start", zoneId: "sunshine-sprint", icon: "🏙️" },
  { id: "sunshine_circle", sound: "s", stage: "initial", text: "circle", segmentHint: "start", zoneId: "sunshine-sprint", icon: "⭕" },
  { id: "sunshine_sentence_1", sound: "s", stage: "sentence", text: "The city sits south of the sea.", segmentHint: "scan-multi", zoneId: "sunshine-sprint", icon: "🏙️" },
  { id: "sunshine_sentence_2", sound: "s", stage: "sentence", text: "Sit on the sofa and eat your soup.", segmentHint: "scan-multi", zoneId: "sunshine-sprint", icon: "🍲" },

  // --- Zone: Silver Circuit (more S medial) ---
  { id: "silver_faster", sound: "s", stage: "medial", text: "faster", segmentHint: "scan", zoneId: "silver-circuit", icon: "🏎️" },
  { id: "silver_master", sound: "s", stage: "medial", text: "master", segmentHint: "scan", zoneId: "silver-circuit", icon: "🎓" },
  { id: "silver_monster", sound: "s", stage: "medial", text: "monster", segmentHint: "scan", zoneId: "silver-circuit", icon: "👹" },
  { id: "silver_answer", sound: "s", stage: "medial", text: "answer", segmentHint: "scan", zoneId: "silver-circuit", icon: "💬" },
  { id: "silver_escape", sound: "s", stage: "medial", text: "escape", segmentHint: "scan", zoneId: "silver-circuit", icon: "🏃" },
  { id: "silver_classroom", sound: "s", stage: "medial", text: "classroom", segmentHint: "scan", zoneId: "silver-circuit", icon: "🏫" },
  { id: "silver_disco", sound: "s", stage: "medial", text: "disco", segmentHint: "scan", zoneId: "silver-circuit", icon: "🕺" },
  { id: "silver_muscle", sound: "s", stage: "medial", text: "muscle", segmentHint: "scan", zoneId: "silver-circuit", icon: "💪" },
  { id: "silver_sentence_1", sound: "s", stage: "sentence", text: "The monster is faster than the master.", segmentHint: "scan-multi", zoneId: "silver-circuit", icon: "👹" },
  { id: "silver_sentence_2", sound: "s", stage: "sentence", text: "Answer quickly so you can escape.", segmentHint: "scan-multi", zoneId: "silver-circuit", icon: "🏃" },

  // --- Zone: Stardust Street (more S final) ---
  { id: "stardust_plus", sound: "s", stage: "final", text: "plus", segmentHint: "end", zoneId: "stardust-street", icon: "➕" },
  { id: "stardust_circus", sound: "s", stage: "final", text: "circus", segmentHint: "end", zoneId: "stardust-street", icon: "🎪" },
  { id: "stardust_campus", sound: "s", stage: "final", text: "campus", segmentHint: "end", zoneId: "stardust-street", icon: "🏫" },
  { id: "stardust_walrus", sound: "s", stage: "final", text: "walrus", segmentHint: "end", zoneId: "stardust-street", icon: "🦭" },
  { id: "stardust_octopus", sound: "s", stage: "final", text: "octopus", segmentHint: "end", zoneId: "stardust-street", icon: "🐙" },
  { id: "stardust_bonus", sound: "s", stage: "final", text: "bonus", segmentHint: "end", zoneId: "stardust-street", icon: "🎁" },
  { id: "stardust_focus", sound: "s", stage: "final", text: "focus", segmentHint: "end", zoneId: "stardust-street", icon: "🔍" },
  { id: "stardust_cactus", sound: "s", stage: "final", text: "cactus", segmentHint: "end", zoneId: "stardust-street", icon: "🌵" },
  { id: "stardust_sentence_1", sound: "s", stage: "sentence", text: "The circus octopus is a bonus surprise.", segmentHint: "scan-multi", zoneId: "stardust-street", icon: "🐙" },
  { id: "stardust_sentence_2", sound: "s", stage: "sentence", text: "Focus on the walrus at the campus circus.", segmentHint: "scan-multi", zoneId: "stardust-street", icon: "🦭" },

  // --- Zone: Super Blend Boulevard (more S blends - spr/str/scr/sw/sk) ---
  { id: "blendblvd_spring", sound: "s", stage: "blend", blend: "spr", text: "spring", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🌱" },
  { id: "blendblvd_string", sound: "s", stage: "blend", blend: "str", text: "string", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🎻" },
  { id: "blendblvd_scream", sound: "s", stage: "blend", blend: "scr", text: "scream", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "😱" },
  { id: "blendblvd_swing", sound: "s", stage: "blend", blend: "sw", text: "swing", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🎢" },
  { id: "blendblvd_stripe", sound: "s", stage: "blend", blend: "str", text: "stripe", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🦓" },
  { id: "blendblvd_sport", sound: "s", stage: "blend", blend: "sp", text: "sport", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "⚽" },
  { id: "blendblvd_spark", sound: "s", stage: "blend", blend: "sp", text: "spark", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "✨" },
  { id: "blendblvd_swim", sound: "s", stage: "blend", blend: "sw", text: "swim", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🏊" },
  { id: "blendblvd_scarf", sound: "s", stage: "blend", blend: "sc", text: "scarf", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🧣" },
  { id: "blendblvd_sweater", sound: "s", stage: "blend", blend: "sw", text: "sweater", segmentHint: "start", zoneId: "super-blend-boulevard", icon: "🧥" },
  { id: "blendblvd_sentence_1", sound: "s", stage: "sentence", text: "Wear a scarf and sweater in the spring.", segmentHint: "scan-multi", zoneId: "super-blend-boulevard", icon: "🧣" },
  { id: "blendblvd_sentence_2", sound: "s", stage: "sentence", text: "The string made a spark and a scream.", segmentHint: "scan-multi", zoneId: "super-blend-boulevard", icon: "✨" },

  // --- Zone: Buzzing Boulevard (more Z) ---
  { id: "buzzblvd_zone", sound: "z", stage: "initial", text: "zone", segmentHint: "start", zoneId: "buzzing-boulevard", icon: "🌀" },
  { id: "buzzblvd_zap", sound: "z", stage: "initial", text: "zap", segmentHint: "start", zoneId: "buzzing-boulevard", icon: "⚡" },
  { id: "buzzblvd_doze", sound: "z", stage: "final", text: "doze", segmentHint: "end", zoneId: "buzzing-boulevard", icon: "😴" },
  { id: "buzzblvd_haze", sound: "z", stage: "final", text: "haze", segmentHint: "end", zoneId: "buzzing-boulevard", icon: "🌫️" },
  { id: "buzzblvd_maze", sound: "z", stage: "final", text: "maze", segmentHint: "end", zoneId: "buzzing-boulevard", icon: "🧩" },
  { id: "buzzblvd_gaze", sound: "z", stage: "final", text: "gaze", segmentHint: "end", zoneId: "buzzing-boulevard", icon: "👀" },
  { id: "buzzblvd_raise", sound: "z", stage: "final", text: "raise", segmentHint: "end", zoneId: "buzzing-boulevard", icon: "🙌" },
  { id: "buzzblvd_cruise", sound: "z", stage: "final", text: "cruise", segmentHint: "end", zoneId: "buzzing-boulevard", icon: "🚢" },
  { id: "buzzblvd_sentence_1", sound: "z", stage: "sentence", text: "Raise your hand if you want to cruise.", segmentHint: "scan-multi", zoneId: "buzzing-boulevard", icon: "🚢" },
  { id: "buzzblvd_sentence_2", sound: "z", stage: "sentence", text: "The zebra will doze in the hazy zone.", segmentHint: "scan-multi", zoneId: "buzzing-boulevard", icon: "🦓" },

  // --- Zone: Shiny Ship Harbor (NEW sound: SH - very relevant for an
  // interdental lisp, since /sh/ is another sibilant made with a similar
  // forward tongue placement issue as /s/ and /z/) ---
  { id: "ship_ship", sound: "sh", stage: "initial", text: "ship", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "🚢" },
  { id: "ship_shoe", sound: "sh", stage: "initial", text: "shoe", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "👟" },
  { id: "ship_shell", sound: "sh", stage: "initial", text: "shell", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "🐚" },
  { id: "ship_shop", sound: "sh", stage: "initial", text: "shop", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "🏪" },
  { id: "ship_shark", sound: "sh", stage: "initial", text: "shark", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "🦈" },
  { id: "ship_sheep", sound: "sh", stage: "initial", text: "sheep", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "🐑" },
  { id: "ship_shine", sound: "sh", stage: "initial", text: "shine", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "✨" },
  { id: "ship_share", sound: "sh", stage: "initial", text: "share", segmentHint: "start", zoneId: "shiny-ship-harbor", icon: "🤝" },
  { id: "ship_fish", sound: "sh", stage: "final", text: "fish", segmentHint: "end", zoneId: "shiny-ship-harbor", icon: "🐟" },
  { id: "ship_wish", sound: "sh", stage: "final", text: "wish", segmentHint: "end", zoneId: "shiny-ship-harbor", icon: "🌠" },
  { id: "ship_wash", sound: "sh", stage: "final", text: "wash", segmentHint: "end", zoneId: "shiny-ship-harbor", icon: "🧼" },
  { id: "ship_brush", sound: "sh", stage: "final", text: "brush", segmentHint: "end", zoneId: "shiny-ship-harbor", icon: "🪥" },
  { id: "ship_crash", sound: "sh", stage: "final", text: "crash", segmentHint: "end", zoneId: "shiny-ship-harbor", icon: "💥" },
  { id: "ship_splash", sound: "sh", stage: "final", text: "splash", segmentHint: "end", zoneId: "shiny-ship-harbor", icon: "💦" },
  { id: "ship_sentence_1", sound: "sh", stage: "sentence", text: "The shy shark shares a shiny shell.", segmentHint: "scan-multi", zoneId: "shiny-ship-harbor", icon: "🦈" },
  { id: "ship_sentence_2", sound: "sh", stage: "sentence", text: "Wash the fish before you splash.", segmentHint: "scan-multi", zoneId: "shiny-ship-harbor", icon: "🐟" },

  // --- Zone: Sibilant Circuit (review mix of S/Z/SH/CH) ---
  { id: "sibcircuit_sun", sound: "s", stage: "initial", text: "sun", segmentHint: "start", zoneId: "sibilant-circuit", icon: "☀️" },
  { id: "sibcircuit_sock", sound: "s", stage: "initial", text: "sock", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🧦" },
  { id: "sibcircuit_zoo", sound: "z", stage: "initial", text: "zoo", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🦁" },
  { id: "sibcircuit_zebra", sound: "z", stage: "initial", text: "zebra", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🦓" },
  { id: "sibcircuit_ship", sound: "sh", stage: "initial", text: "ship", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🚢" },
  { id: "sibcircuit_shell", sound: "sh", stage: "initial", text: "shell", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🐚" },
  { id: "sibcircuit_chip", sound: "ch", stage: "initial", text: "chip", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🍟" },
  { id: "sibcircuit_chair", sound: "ch", stage: "initial", text: "chair", segmentHint: "start", zoneId: "sibilant-circuit", icon: "🪑" },
  { id: "sibcircuit_sentence_1", sound: "sh", stage: "sentence", text: "The zebra wears a shiny shell.", segmentHint: "scan-multi", zoneId: "sibilant-circuit", icon: "🦓" },
  { id: "sibcircuit_sentence_2", sound: "s", stage: "sentence", text: "Sam's ship chases the chatty shark.", segmentHint: "scan-multi", zoneId: "sibilant-circuit", icon: "🚢" },

  // --- Zone: Sentence Central (more mixed sentences, S-heavy) ---
  { id: "sentcentral_1", sound: "s", stage: "sentence", text: "Sam sells seven silver spoons.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🥄" },
  { id: "sentcentral_2", sound: "s", stage: "sentence", text: "The sun sank slowly past the sea.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🌅" },
  { id: "sentcentral_3", sound: "z", stage: "sentence", text: "Zoe's zebra zips past the buzzing bees.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🦓" },
  { id: "sentcentral_4", sound: "sh", stage: "sentence", text: "The sheep shine near the shop.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🐑" },
  { id: "sentcentral_5", sound: "ch", stage: "sentence", text: "The chatty child chews chips at lunch.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🍟" },
  { id: "sentcentral_6", sound: "s", stage: "sentence", text: "Six silly seals swim past the sailboat.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🦭" },
  { id: "sentcentral_7", sound: "s", stage: "sentence", text: "Sara's spaceship soars past seven stars.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🚀" },
  { id: "sentcentral_8", sound: "s", stage: "sentence", text: "The sassy cat sits on a soft cushion.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🐱" },
  { id: "sentcentral_9", sound: "z", stage: "sentence", text: "Please freeze before you sneeze again.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🤧" },
  { id: "sentcentral_10", sound: "s", stage: "sentence", text: "Sam's sister sees a silver spaceship.", segmentHint: "scan-multi", zoneId: "sentence-central", icon: "🚀" },

  // --- Zone: Tongue Twister Trail (boss - more twisters, S/SH heavy) ---
  { id: "twistertrail_1", sound: "sh", stage: "tongue-twister", text: "She sells seashells by the seashore.", segmentHint: "scan-multi", zoneId: "tongue-twister-trail", isBoss: true, icon: "🐚" },
  { id: "twistertrail_2", sound: "s", stage: "tongue-twister", text: "Sam's silly seals slide past six sleepy sheep.", segmentHint: "scan-multi", zoneId: "tongue-twister-trail", isBoss: true, icon: "🦭" },
  { id: "twistertrail_3", sound: "s", stage: "tongue-twister", text: "Susie's spaceship soars past seven silver stars.", segmentHint: "scan-multi", zoneId: "tongue-twister-trail", isBoss: true, icon: "🚀" },
  { id: "twistertrail_4", sound: "sh", stage: "tongue-twister", text: "The shy shark shines and shares her shell.", segmentHint: "scan-multi", zoneId: "tongue-twister-trail", isBoss: true, icon: "🦈" },
  { id: "twistertrail_5", sound: "s", stage: "tongue-twister", text: "Six silver sailboats sail slowly past the sand.", segmentHint: "scan-multi", zoneId: "tongue-twister-trail", isBoss: true, icon: "⛵" },

  // --- Zone: Grand Prix Finale (ultimate boss - hardest mixed content) ---
  { id: "grandprix_1", sound: "s", stage: "tongue-twister", text: "Sam's silver spaceship soars past six sleepy seals in the sunshine.", segmentHint: "scan-multi", zoneId: "grand-prix-finale", isBoss: true, icon: "🚀" },
  { id: "grandprix_2", sound: "sh", stage: "tongue-twister", text: "She washes the shiny shells on the shore.", segmentHint: "scan-multi", zoneId: "grand-prix-finale", isBoss: true, icon: "🐚" },
  { id: "grandprix_3", sound: "z", stage: "tongue-twister", text: "The zebra zips past the buzzing zone in a zigzag.", segmentHint: "scan-multi", zoneId: "grand-prix-finale", isBoss: true, icon: "🦓" },
  { id: "grandprix_4", sound: "ch", stage: "tongue-twister", text: "Chatty cheetahs chase the chatterbox chickens.", segmentHint: "scan-multi", zoneId: "grand-prix-finale", isBoss: true, icon: "🐆" },
  { id: "grandprix_5", sound: "s", stage: "tongue-twister", text: "The fastest race car speeds past the silver stadium.", segmentHint: "scan-multi", zoneId: "grand-prix-finale", isBoss: true, icon: "🏎️" },

  // --- Zone: Sunset Strip (more S initial) ---
  { id: "sunsetstrip_send", sound: "s", stage: "initial", text: "send", segmentHint: "start", zoneId: "sunset-strip", icon: "📤" },
  { id: "sunsetstrip_set", sound: "s", stage: "initial", text: "set", segmentHint: "start", zoneId: "sunset-strip", icon: "📍" },
  { id: "sunsetstrip_several", sound: "s", stage: "initial", text: "several", segmentHint: "start", zoneId: "sunset-strip", icon: "🔢" },
  { id: "sunsetstrip_simple", sound: "s", stage: "initial", text: "simple", segmentHint: "start", zoneId: "sunset-strip", icon: "✅" },
  { id: "sunsetstrip_single", sound: "s", stage: "initial", text: "single", segmentHint: "start", zoneId: "sunset-strip", icon: "1️⃣" },
  { id: "sunsetstrip_special", sound: "s", stage: "initial", text: "special", segmentHint: "start", zoneId: "sunset-strip", icon: "⭐" },
  { id: "sunsetstrip_story", sound: "s", stage: "initial", text: "story", segmentHint: "start", zoneId: "sunset-strip", icon: "📖" },
  { id: "sunsetstrip_sudden", sound: "s", stage: "initial", text: "sudden", segmentHint: "start", zoneId: "sunset-strip", icon: "⚡" },
  { id: "sunsetstrip_sugar", sound: "s", stage: "initial", text: "sugar", segmentHint: "start", zoneId: "sunset-strip", icon: "🍬" },
  { id: "sunsetstrip_sail", sound: "s", stage: "initial", text: "sail", segmentHint: "start", zoneId: "sunset-strip", icon: "⛵" },
  { id: "sunsetstrip_sentence_1", sound: "s", stage: "sentence", text: "Send a single special story.", segmentHint: "scan-multi", zoneId: "sunset-strip", icon: "📖" },
  { id: "sunsetstrip_sentence_2", sound: "s", stage: "sentence", text: "Sail south before sudden storms.", segmentHint: "scan-multi", zoneId: "sunset-strip", icon: "⛵" },

  // --- Zone: Star Harbor (more S final) ---
  { id: "starharbor_kiss", sound: "s", stage: "final", text: "kiss", segmentHint: "end", zoneId: "star-harbor", icon: "💋" },
  { id: "starharbor_miss", sound: "s", stage: "final", text: "miss", segmentHint: "end", zoneId: "star-harbor", icon: "😢" },
  { id: "starharbor_press", sound: "s", stage: "final", text: "press", segmentHint: "end", zoneId: "star-harbor", icon: "🔘" },
  { id: "starharbor_less", sound: "s", stage: "final", text: "less", segmentHint: "end", zoneId: "star-harbor", icon: "➖" },
  { id: "starharbor_chess", sound: "s", stage: "final", text: "chess", segmentHint: "end", zoneId: "star-harbor", icon: "♟️" },
  { id: "starharbor_guess", sound: "s", stage: "final", text: "guess", segmentHint: "end", zoneId: "star-harbor", icon: "🤷" },
  { id: "starharbor_moss", sound: "s", stage: "final", text: "moss", segmentHint: "end", zoneId: "star-harbor", icon: "🌿" },
  { id: "starharbor_boss", sound: "s", stage: "final", text: "boss", segmentHint: "end", zoneId: "star-harbor", icon: "👔" },
  { id: "starharbor_sentence_1", sound: "s", stage: "sentence", text: "The boss will guess less than us.", segmentHint: "scan-multi", zoneId: "star-harbor", icon: "👔" },
  { id: "starharbor_sentence_2", sound: "s", stage: "sentence", text: "Press play and start the chess game.", segmentHint: "scan-multi", zoneId: "star-harbor", icon: "♟️" },

  // --- Zone: Spice Street (more S medial) ---
  { id: "spicestreet_also", sound: "s", stage: "medial", text: "also", segmentHint: "scan", zoneId: "spice-street", icon: "➕" },
  { id: "spicestreet_person", sound: "s", stage: "medial", text: "person", segmentHint: "scan", zoneId: "spice-street", icon: "🧑" },
  { id: "spicestreet_message", sound: "s", stage: "medial", text: "message", segmentHint: "scan", zoneId: "spice-street", icon: "✉️" },
  { id: "spicestreet_missing", sound: "s", stage: "medial", text: "missing", segmentHint: "scan", zoneId: "spice-street", icon: "❓" },
  { id: "spicestreet_dressing", sound: "s", stage: "medial", text: "dressing", segmentHint: "scan", zoneId: "spice-street", icon: "🥗" },
  { id: "spicestreet_wisdom", sound: "s", stage: "medial", text: "wisdom", segmentHint: "scan", zoneId: "spice-street", icon: "🦉" },
  { id: "spicestreet_passage", sound: "s", stage: "medial", text: "passage", segmentHint: "scan", zoneId: "spice-street", icon: "📜" },
  { id: "spicestreet_musical", sound: "s", stage: "medial", text: "musical", segmentHint: "scan", zoneId: "spice-street", icon: "🎵" },
  { id: "spicestreet_sentence_1", sound: "s", stage: "sentence", text: "The wise person left a message.", segmentHint: "scan-multi", zoneId: "spice-street", icon: "✉️" },
  { id: "spicestreet_sentence_2", sound: "s", stage: "sentence", text: "This musical passage is missing a note.", segmentHint: "scan-multi", zoneId: "spice-street", icon: "🎵" },

  // --- Zone: Squeeze Zone (new S blends - squ/spl/spr) ---
  { id: "squeezezone_square", sound: "s", stage: "blend", blend: "squ", text: "square", segmentHint: "start", zoneId: "squeeze-zone", icon: "🟦" },
  { id: "squeezezone_squeeze", sound: "s", stage: "blend", blend: "squ", text: "squeeze", segmentHint: "start", zoneId: "squeeze-zone", icon: "🤗" },
  { id: "squeezezone_squirrel", sound: "s", stage: "blend", blend: "squ", text: "squirrel", segmentHint: "start", zoneId: "squeeze-zone", icon: "🐿️" },
  { id: "squeezezone_squash", sound: "s", stage: "blend", blend: "squ", text: "squash", segmentHint: "start", zoneId: "squeeze-zone", icon: "🎃" },
  { id: "squeezezone_split", sound: "s", stage: "blend", blend: "spl", text: "split", segmentHint: "start", zoneId: "squeeze-zone", icon: "➗" },
  { id: "squeezezone_spray", sound: "s", stage: "blend", blend: "spr", text: "spray", segmentHint: "start", zoneId: "squeeze-zone", icon: "💦" },
  { id: "squeezezone_sprout", sound: "s", stage: "blend", blend: "spr", text: "sprout", segmentHint: "start", zoneId: "squeeze-zone", icon: "🌱" },
  { id: "squeezezone_scrub", sound: "s", stage: "blend", blend: "scr", text: "scrub", segmentHint: "start", zoneId: "squeeze-zone", icon: "🧽" },
  { id: "squeezezone_sentence_1", sound: "s", stage: "sentence", text: "The squirrel will squeeze through the square hole.", segmentHint: "scan-multi", zoneId: "squeeze-zone", icon: "🐿️" },
  { id: "squeezezone_sentence_2", sound: "s", stage: "sentence", text: "Spray water on the sprouting squash.", segmentHint: "scan-multi", zoneId: "squeeze-zone", icon: "🎃" },

  // --- Zone: Zippy Zone (more Z) ---
  { id: "zippyzone_zipper", sound: "z", stage: "initial", text: "zipper", segmentHint: "start", zoneId: "zippy-zone", icon: "🤐" },
  { id: "zippyzone_zesty", sound: "z", stage: "initial", text: "zesty", segmentHint: "start", zoneId: "zippy-zone", icon: "🌶️" },
  { id: "zippyzone_quiz", sound: "z", stage: "final", text: "quiz", segmentHint: "end", zoneId: "zippy-zone", icon: "📝" },
  { id: "zippyzone_jazz", sound: "z", stage: "final", text: "jazz", segmentHint: "end", zoneId: "zippy-zone", icon: "🎷" },
  { id: "zippyzone_laser", sound: "z", stage: "medial", text: "laser", segmentHint: "scan", zoneId: "zippy-zone", icon: "⚡" },
  { id: "zippyzone_buzzer", sound: "z", stage: "medial", text: "buzzer", segmentHint: "scan", zoneId: "zippy-zone", icon: "🔔" },
  { id: "zippyzone_dozen", sound: "z", stage: "medial", text: "dozen", segmentHint: "scan", zoneId: "zippy-zone", icon: "🍩" },
  { id: "zippyzone_citizen", sound: "z", stage: "medial", text: "citizen", segmentHint: "scan", zoneId: "zippy-zone", icon: "🧑‍🤝‍🧑" },
  { id: "zippyzone_sentence_1", sound: "z", stage: "sentence", text: "The jazzy buzzer plays a zesty quiz.", segmentHint: "scan-multi", zoneId: "zippy-zone", icon: "🎷" },
  { id: "zippyzone_sentence_2", sound: "z", stage: "sentence", text: "A dozen citizens zoomed past the laser.", segmentHint: "scan-multi", zoneId: "zippy-zone", icon: "⚡" },

  // --- Zone: Chomp City (more CH) ---
  { id: "chompcity_church", sound: "ch", stage: "initial", text: "church", segmentHint: "start", zoneId: "chomp-city", icon: "⛪" },
  { id: "chompcity_chest", sound: "ch", stage: "initial", text: "chest", segmentHint: "start", zoneId: "chomp-city", icon: "📦" },
  { id: "chompcity_cheap", sound: "ch", stage: "initial", text: "cheap", segmentHint: "start", zoneId: "chomp-city", icon: "💵" },
  { id: "chompcity_coach", sound: "ch", stage: "final", text: "coach", segmentHint: "end", zoneId: "chomp-city", icon: "🏋️" },
  { id: "chompcity_teach", sound: "ch", stage: "final", text: "teach", segmentHint: "end", zoneId: "chomp-city", icon: "👩‍🏫" },
  { id: "chompcity_reach", sound: "ch", stage: "final", text: "reach", segmentHint: "end", zoneId: "chomp-city", icon: "🙋" },
  { id: "chompcity_chunk", sound: "ch", stage: "initial", text: "chunk", segmentHint: "start", zoneId: "chomp-city", icon: "🧀" },
  { id: "chompcity_munch", sound: "ch", stage: "final", text: "munch", segmentHint: "end", zoneId: "chomp-city", icon: "🍪" },
  { id: "chompcity_sentence_1", sound: "ch", stage: "sentence", text: "The coach will teach at the church.", segmentHint: "scan-multi", zoneId: "chomp-city", icon: "⛪" },
  { id: "chompcity_sentence_2", sound: "ch", stage: "sentence", text: "Munch a chunk of cheap cheese.", segmentHint: "scan-multi", zoneId: "chomp-city", icon: "🍪" },

  // --- Zone: Shore Town (more SH) ---
  { id: "shoretown_shirt", sound: "sh", stage: "initial", text: "shirt", segmentHint: "start", zoneId: "shore-town", icon: "👕" },
  { id: "shoretown_shower", sound: "sh", stage: "initial", text: "shower", segmentHint: "start", zoneId: "shore-town", icon: "🚿" },
  { id: "shoretown_shape", sound: "sh", stage: "initial", text: "shape", segmentHint: "start", zoneId: "shore-town", icon: "🔷" },
  { id: "shoretown_cash", sound: "sh", stage: "final", text: "cash", segmentHint: "end", zoneId: "shore-town", icon: "💵" },
  { id: "shoretown_fresh", sound: "sh", stage: "final", text: "fresh", segmentHint: "end", zoneId: "shore-town", icon: "🥬" },
  { id: "shoretown_flash", sound: "sh", stage: "final", text: "flash", segmentHint: "end", zoneId: "shore-town", icon: "⚡" },
  { id: "shoretown_dish", sound: "sh", stage: "final", text: "dish", segmentHint: "end", zoneId: "shore-town", icon: "🍽️" },
  { id: "shoretown_rush", sound: "sh", stage: "final", text: "rush", segmentHint: "end", zoneId: "shore-town", icon: "🏃" },
  { id: "shoretown_sentence_1", sound: "sh", stage: "sentence", text: "Wash your shirt in the shower.", segmentHint: "scan-multi", zoneId: "shore-town", icon: "🚿" },
  { id: "shoretown_sentence_2", sound: "sh", stage: "sentence", text: "Rush to wash the fresh dish.", segmentHint: "scan-multi", zoneId: "shore-town", icon: "🍽️" },

  // --- Zone: Treasure Trail (NEW sound: ZH - limited vocabulary in English,
  // so kept smaller and mixed with a couple of review words) ---
  { id: "treasuretrail_treasure", sound: "zh", stage: "medial", text: "treasure", segmentHint: "scan", zoneId: "treasure-trail", icon: "💰" },
  { id: "treasuretrail_measure", sound: "zh", stage: "medial", text: "measure", segmentHint: "scan", zoneId: "treasure-trail", icon: "📏" },
  { id: "treasuretrail_usual", sound: "zh", stage: "medial", text: "usual", segmentHint: "scan", zoneId: "treasure-trail", icon: "👍" },
  { id: "treasuretrail_television", sound: "zh", stage: "medial", text: "television", segmentHint: "scan", zoneId: "treasure-trail", icon: "📺" },
  { id: "treasuretrail_garage", sound: "zh", stage: "final", text: "garage", segmentHint: "end", zoneId: "treasure-trail", icon: "🚗" },
  { id: "treasuretrail_casual", sound: "zh", stage: "medial", text: "casual", segmentHint: "scan", zoneId: "treasure-trail", icon: "👕" },
  { id: "treasuretrail_sentence_1", sound: "zh", stage: "sentence", text: "It's usual to measure the treasure.", segmentHint: "scan-multi", zoneId: "treasure-trail", icon: "💰" },
  { id: "treasuretrail_sentence_2", sound: "zh", stage: "sentence", text: "The garage has a television inside.", segmentHint: "scan-multi", zoneId: "treasure-trail", icon: "📺" },

  // --- Zone: Story Sentence Station (more mixed sentences, S-heavy) ---
  { id: "storystation_1", sound: "s", stage: "sentence", text: "Sam sent a special message to his sister.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "✉️" },
  { id: "storystation_2", sound: "s", stage: "sentence", text: "The squirrel squeezes past the square fence.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "🐿️" },
  { id: "storystation_3", sound: "z", stage: "sentence", text: "Zoe's zipper got stuck in a zigzag.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "🤐" },
  { id: "storystation_4", sound: "sh", stage: "sentence", text: "The shore town has a fresh fish shop.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "🐟" },
  { id: "storystation_5", sound: "ch", stage: "sentence", text: "Chip's coach teaches chess at church.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "♟️" },
  { id: "storystation_6", sound: "s", stage: "sentence", text: "Six silly citizens sang a zesty song.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "🎵" },
  { id: "storystation_7", sound: "zh", stage: "sentence", text: "It's a usual pleasure to measure treasure.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "💰" },
  { id: "storystation_8", sound: "s", stage: "sentence", text: "Sara's story is about a sudden sunset.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "🌇" },
  { id: "storystation_9", sound: "s", stage: "sentence", text: "The boss will guess the mossy chess move.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "♟️" },
  { id: "storystation_10", sound: "z", stage: "sentence", text: "Press the buzzer before the jazzy quiz.", segmentHint: "scan-multi", zoneId: "story-sentence-station", icon: "🔔" },

  // --- Zone: Ultimate Twister Tour (final boss - hardest mixed content,
  // including the new ZH sound) ---
  { id: "ultimatetwister_1", sound: "s", stage: "tongue-twister", text: "Sam's squirrel squeezes past six silly citizens singing songs.", segmentHint: "scan-multi", zoneId: "ultimate-twister-tour", isBoss: true, icon: "🐿️" },
  { id: "ultimatetwister_2", sound: "sh", stage: "tongue-twister", text: "The shore town's fresh fish shop sells shiny shells.", segmentHint: "scan-multi", zoneId: "ultimate-twister-tour", isBoss: true, icon: "🐚" },
  { id: "ultimatetwister_3", sound: "z", stage: "tongue-twister", text: "Zoe's jazzy buzzer zips past a dozen zesty zebras.", segmentHint: "scan-multi", zoneId: "ultimate-twister-tour", isBoss: true, icon: "🦓" },
  { id: "ultimatetwister_4", sound: "ch", stage: "tongue-twister", text: "Chip's coach teaches chess while chomping cheap chunks of cheese.", segmentHint: "scan-multi", zoneId: "ultimate-twister-tour", isBoss: true, icon: "🧀" },
  { id: "ultimatetwister_5", sound: "zh", stage: "tongue-twister", text: "It's a usual pleasure to measure the treasure in the garage.", segmentHint: "scan-multi", zoneId: "ultimate-twister-tour", isBoss: true, icon: "💰" },
];

export function itemsForZone(zoneId) {
  return exercises.filter((e) => e.zoneId === zoneId);
}

export function getItem(id) {
  return exercises.find((e) => e.id === id);
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// A fresh shuffle each time a zone is entered, so replaying a zone (very
// common once it's unlocked, and the only way to revisit a "complete" one)
// doesn't show the exact same words in the exact same order every time.
export function shuffledItemsForZone(zoneId) {
  return shuffle(itemsForZone(zoneId));
}
