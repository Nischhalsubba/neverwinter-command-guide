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
    syntax: "/CombatLog 1",
    title: "Toggle Combat Log",
    description: "Turn combat logging on for parser-friendly log output.",
    example: "/CombatLog 1",
    aliases: [],
    category: "Utility",
    note: "Use 0 to turn logging off.",
    noteText: "Switch the value back to 0 when you want to stop writing log output.",
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
    id: "wave-emote",
    syntax: "/e wave",
    title: "Wave",
    description: "Play the wave emote for greetings or quick social interaction.",
    example: "/e wave",
    aliases: [],
    category: "Emotes",
    note: "Cosmetic emote",
    noteText: "This command is used for visual roleplay and social interactions.",
    anchor: "emotes",
    letter: "E"
  },
  {
    id: "salute-emote",
    syntax: "/e salute",
    title: "Salute",
    description: "Play the salute emote.",
    example: "/e salute",
    aliases: [],
    category: "Emotes",
    note: "Cosmetic emote",
    noteText: "This command is used for visual roleplay and social interactions.",
    anchor: "emotes",
    letter: "E"
  },
  {
    id: "shrug-emote",
    syntax: "/e shrug",
    title: "Shrug",
    description: "Play the shrug emote for a casual social reaction.",
    example: "/e shrug",
    aliases: [],
    category: "Emotes",
    note: "Cosmetic emote",
    noteText: "This command is used for visual roleplay and social interactions.",
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
    description: "Save a screenshot without the UI in JPG format.",
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
    note: "Try this before using more extreme recovery commands.",
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

export const developerTricks = [
  {
    id: "dev-combatlog",
    syntax: "/CombatLog 1",
    title: "Parser Logging",
    description: "Write combat output for external parsing and test rotations.",
    example: "/CombatLog 1",
    aliases: [],
    category: "Utility",
    note: "Developer trick",
    noteText: "Set /CombatLog 0 after testing to stop the log file."
  },
  {
    id: "dev-showfps",
    syntax: "/showfps",
    title: "Performance Check",
    description: "Display frame rate while testing settings, overlays, or stream scenes.",
    example: "/showfps",
    aliases: [],
    category: "Display",
    note: "Developer trick",
    noteText: "Useful when validating performance changes or graphics tweaks."
  },
  {
    id: "dev-screenshot",
    syntax: "/screenshot_jpg",
    title: "Clean Capture",
    description: "Take UI-free screenshots for bug reports, guides, thumbnails, or wiki edits.",
    example: "/screenshot_jpg",
    aliases: [],
    category: "Display",
    note: "Developer trick",
    noteText: "Helpful for documentation, showcase assets, and visual comparisons."
  },
  {
    id: "dev-stuck",
    syntax: "/stuck",
    title: "Position Recovery",
    description: "Recover from collision or movement problems while exploring map edges or testing routes.",
    example: "/stuck",
    aliases: [],
    category: "Utility",
    note: "Developer trick",
    noteText: "Try this first before relogging during route or environment testing."
  }
];

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
  },
  {
    question: "Can I search by alias?",
    answer:
      "Yes. Many commands are easier to find by their short form, such as /r, /w, or /g."
  }
];

export const quickHelpLinks = [
  { label: "Whisper & Reply", query: "/tell" },
  { label: "Guild & Alliance Chat", query: "/all" },
  { label: "Combat Log", query: "/CombatLog" },
  { label: "Screenshots", query: "/screenshot_jpg" },
  { label: "Emotes", category: "Emotes" }
];

export const homepageSectors = [
  {
    title: "Chat",
    description: "Standard public and local communication channels.",
    count: "14 Commands",
    tone: "teal"
  },
  {
    title: "Whispers",
    description: "Direct person-to-person encrypted communication lines.",
    count: "8 Commands",
    tone: "violet"
  },
  {
    title: "Guild",
    description: "Manage alliances, rosters, and stronghold coordination.",
    count: "22 Commands",
    tone: "gold"
  },
  {
    title: "Emotes & Social",
    description: "From simple bows to complex dance loops. Express your character through the command line.",
    chips: ["/DANCE", "/BOW", "/LAUGH"],
    tone: "wide"
  },
  {
    title: "Utility",
    description: "System flags, UI toggles, and performance diagnostics.",
    action: "Access tools",
    tone: "utility"
  }
];

export const essentialCiphers = [
  {
    command: "/lfg [message]",
    title: "Looking for Group",
    description: "Broadcasts your availability to the global LFG channel.",
    accent: "teal"
  },
  {
    command: "/s [message]",
    title: "Say",
    description: "Local proximity chat. Visible only to players in your immediate vicinity.",
    accent: "violet"
  },
  {
    command: "/w [name], [msg]",
    title: "Whisper",
    description: "Send a private message to a specific player across instances.",
    accent: "gold"
  },
  {
    command: "/g [message]",
    title: "Guild",
    description: "Chat exclusively with your active guild members.",
    accent: "teal"
  }
];

export const archiveGroups = {
  C: [
    {
      category: "Chat",
      syntax: "/channel_join [name]",
      title: "Join Channel",
      description:
        "Join a specific custom chat channel by its unique name. If the channel requires a password, you will be prompted to enter it.",
      alias: "/cj, /join",
      accent: "violet"
    },
    {
      category: "Combat",
      syntax: "/combatlog 1|0",
      title: "Toggle Combat Log",
      description:
        "Enables or disables the recording of combat data to a local text file for external analysis using parsers.",
      alias: "/log",
      accent: "violet"
    }
  ],
  E: [
    {
      category: "Emotes",
      syntax: "/emote_eat",
      title: "Eat Rations",
      description:
        "Triggers the eating animation. Purely cosmetic, does not provide mechanical buffs from food items.",
      alias: "/eat",
      accent: "violet"
    }
  ]
};

export const directoryRows = [
  {
    command: "/whisper [name]",
    action: "Send a private message",
    category: "Chat",
    usage: "Direct channel to single entity",
    tone: "teal"
  },
  {
    command: "/target_nearest",
    action: "Lock focus on closest foe",
    category: "Combat",
    usage: "Range: 30ft pulse",
    tone: "violet"
  },
  {
    command: "/inventory_sort",
    action: "Organize pack by value",
    category: "Utility",
    usage: "Requires rest state",
    tone: "gold"
  },
  {
    command: "/party_invite [tag]",
    action: "Form a combat squad",
    category: "Chat",
    usage: "Max 5 members",
    tone: "teal"
  },
  {
    command: "/inspect_shrine",
    action: "Read ancient inscriptions",
    category: "Legendary",
    usage: "Lore Master Rank 4 req.",
    tone: "legendary"
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
