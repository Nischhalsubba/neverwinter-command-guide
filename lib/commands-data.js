export const categoryShortcuts = [
  { id: "chat", label: "Chat", blurb: "Alliance, zone, say, and direct channel syntax." },
  { id: "private", label: "Private", blurb: "Whispers, replies, and direct player messaging." },
  { id: "party-guild", label: "Party / Guild", blurb: "Party, guild, and officer communication tools." },
  { id: "utility", label: "Utility", blurb: "Combat logs, help, stuck recovery, and support." },
  { id: "emotes", label: "Emotes", blurb: "Roleplay, reactions, and social animations." },
  { id: "display", label: "Display", blurb: "Screenshots, framerate, and interface visibility." }
];

export const commands = [
  {
    id: "alliance-chat",
    syntax: "/all <message>",
    title: "Alliance Chat",
    description: "Send a message to alliance chat.",
    example: "/all Looking for dragon runs",
    aliases: ["/alliance"],
    category: "Chat",
    section: "Most Used",
    anchor: "chat-commands",
    letter: "A"
  },
  {
    id: "away-message",
    syntax: "/afk",
    title: "Away From Keyboard",
    description: "Mark yourself as away so other players know you may not respond immediately.",
    example: "/afk",
    aliases: [],
    category: "Utility",
    note: "Use carefully",
    noteText: "Availability can vary between clients and patches.",
    anchor: "utility-commands",
    letter: "A"
  },
  {
    id: "combat-log",
    syntax: "/combatlog 1|0",
    title: "Toggle Combat Log",
    description: "Turn combat logging on or off for log-based analysis.",
    example: "/combatlog 1",
    aliases: [],
    category: "Utility",
    section: "Most Used",
    anchor: "utility-commands",
    letter: "C"
  },
  {
    id: "dance-emote",
    syntax: "/e dance",
    title: "Dance",
    description: "Play a dance emote for social spaces, screenshots, or roleplay.",
    example: "/e dance",
    aliases: ["/emote_dance"],
    category: "Emotes",
    anchor: "emotes",
    letter: "D"
  },
  {
    id: "eat-rations",
    syntax: "/e eat",
    title: "Eat Rations",
    description: "Play the eating animation for roleplay or social use.",
    example: "/e eat",
    aliases: ["/emote_eat"],
    category: "Emotes",
    note: "Cosmetic emote",
    noteText: "This command is mainly used for social and roleplay moments.",
    anchor: "emotes",
    letter: "E"
  },
  {
    id: "framerate",
    syntax: "/showfps",
    title: "Show Frame Rate",
    description: "Display the current frame rate for quick performance checks.",
    example: "/showfps",
    aliases: [],
    category: "Display",
    anchor: "display-commands",
    letter: "F"
  },
  {
    id: "guild-chat",
    syntax: "/g <message>",
    title: "Guild Chat",
    description: "Send a message to your guild chat channel.",
    example: "/g Queueing for random skirmish",
    aliases: ["/guild"],
    category: "Party / Guild",
    anchor: "party-guild",
    letter: "G"
  },
  {
    id: "help-chat",
    syntax: "/help",
    title: "Help",
    description: "Open or call the command help interface when you need in-game guidance.",
    example: "/help",
    aliases: [],
    category: "Utility",
    anchor: "utility-commands",
    letter: "H"
  },
  {
    id: "invite-player",
    syntax: "/invite <player>",
    title: "Invite Player",
    description: "Invite another player to your current party.",
    example: "/invite Character@Handle",
    aliases: ["/inv"],
    category: "Party / Guild",
    anchor: "party-guild",
    letter: "I"
  },
  {
    id: "local-chat",
    syntax: "/s <message>",
    title: "Say Chat",
    description: "Speak in local say chat for nearby players.",
    example: "/s Need one more for heroic encounter",
    aliases: ["/say"],
    category: "Chat",
    anchor: "chat-commands",
    letter: "L"
  },
  {
    id: "officer-chat",
    syntax: "/o <message>",
    title: "Officer Chat",
    description: "Send a message to guild officers if you have permission to use the channel.",
    example: "/o Please review the guild bank request",
    aliases: ["/officer"],
    category: "Party / Guild",
    anchor: "party-guild",
    letter: "O"
  },
  {
    id: "party-chat",
    syntax: "/p <message>",
    title: "Party Chat",
    description: "Send a message to your current party.",
    example: "/p Ready for the next pull",
    aliases: ["/party"],
    category: "Party / Guild",
    anchor: "party-guild",
    letter: "P"
  },
  {
    id: "reply-whisper",
    syntax: "/r <message>",
    title: "Reply to Last Whisper",
    description: "Reply to the most recent private message you received.",
    example: "/r yes, invite me",
    aliases: ["/reply"],
    category: "Private",
    section: "Most Used",
    anchor: "private-commands",
    letter: "R"
  },
  {
    id: "screenshot-jpg",
    syntax: "/screenshot_jpg",
    title: "Take a Screenshot",
    description: "Capture a JPG screenshot without the normal gameplay UI.",
    example: "/screenshot_jpg",
    aliases: [],
    category: "Display",
    section: "Most Used",
    anchor: "display-commands",
    letter: "S"
  },
  {
    id: "stuck-recovery",
    syntax: "/stuck",
    title: "Recover from Being Stuck",
    description: "Attempt to free your character if movement is blocked.",
    example: "/stuck",
    aliases: [],
    category: "Utility",
    note: "Use this before trying more extreme recovery options.",
    noteText: "If it fails, wait a moment before repeating it.",
    section: "Most Used",
    anchor: "utility-commands",
    letter: "S"
  },
  {
    id: "tell-player",
    syntax: "/tell <player>, <message>",
    title: "Private Message",
    description: "Send a direct private message to a specific player.",
    example: "/tell Character@Handle, hello",
    aliases: ["/w", "/t", "/whisper"],
    category: "Private",
    section: "Most Used",
    anchor: "private-commands",
    letter: "T"
  },
  {
    id: "who-list",
    syntax: "/who",
    title: "Who List",
    description: "View available character information or presence details depending on the client response.",
    example: "/who",
    aliases: [],
    category: "Utility",
    note: "Undocumented",
    noteText: "Public descriptions for this command are often incomplete.",
    anchor: "undocumented",
    letter: "W"
  },
  {
    id: "zone-chat",
    syntax: "/z <message>",
    title: "Zone Chat",
    description: "Broadcast a message to players in your current zone.",
    example: "/z LFM for master trial",
    aliases: ["/zone"],
    category: "Chat",
    anchor: "chat-commands",
    letter: "Z"
  }
];

export const featuredCommands = commands.filter((command) => command.section === "Most Used");

export const faqItems = [
  {
    question: "What is this site for?",
    answer:
      "This is a fan-made reference for Neverwinter chat, emote, utility, and documented player commands."
  },
  {
    question: "Are all commands chat commands?",
    answer:
      "No. Some commands are for communication, while others affect utility, display, targeting, or UI behavior."
  },
  {
    question: "Why are some commands marked undocumented?",
    answer:
      "Some command lists include entries without clear public explanations, so those commands are labeled carefully instead of guessed."
  }
];

export const sidebarLinks = [
  { id: "start", href: "#start-here", label: "Start Here" },
  { id: "used", href: "#most-used", label: "Most Used" },
  { id: "chat", href: "#directory-title", label: "Chat Commands", category: "Chat" },
  {
    id: "utility",
    href: "#directory-title",
    label: "Utility Commands",
    category: "Utility"
  },
  { id: "emotes", href: "#directory-title", label: "Emotes", category: "Emotes" },
  { id: "undocumented", href: "#directory-title", label: "Undocumented", query: "undocumented" }
];
