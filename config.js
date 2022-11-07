import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "UpCaned",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1034573355061366825&permissions=8&scope=bot%20applications.commands",
  //BotInvite Link
  Features: [
    {
      name: "Moderacion",
      description:
        "La moderación es el proceso de eliminar o disminuir los extremos.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Status",
      description:
        "El tiempo de actividad es una medida de la confiabilidad del sistema, expresada como el porcentaje de tiempo que una máquina, generalmente una computadora.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automatizacion",
      description:
        "La automatización describe una amplia gama de tecnologías que reducen la intervención humana en los procesos.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Bienvenida",
      description:
        "Es la persona que saluda a la nueva persona de una manera única y excelente.",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ]
  //Bot Features
  serverCount: 1, //-  - Your
  memberCount: 2, //--   - Bot
  executedCommand: 10, //--  - Stats
  availableCommand: 130, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/Luqisc/Discord-Bot-Website",
  twitterLink: "https://twitter.com",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.com",
  youtubeLink: "https://www.youtube.com/channel/",
};

export default config;
