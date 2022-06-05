import {
  MdContactSupport,
  MdOutlineSportsEsports,
  MdOutlineGroupWork,
  MdWorkOutline,
  MdOutlineEmojiFoodBeverage,
  MdOutlineQuiz,
  MdOutlineSchool,
  MdLocalActivity,
  MdDashboard,
  MdOutlineAccountTree,
} from "react-icons/md";

import { IMAGES } from "../../constants";
import {
  ActivitiesDataProps,
  PathsDataProps,
  SocialMediaDataProps,
} from "../../types";

export const SOCIAL_MEDIA_DATA: SocialMediaDataProps[] = [
  {
    id: 0,
    title: "Facebook",
    icon: IMAGES.facebook,
    link: "https://www.facebook.com/groups/603128047491429/",
  },
  {
    id: 2,
    title: "Instagram",
    icon: IMAGES.instagram,
    link: "https://instagram.com/codesi.club?utm_medium=copy_link",
  },
  {
    id: 3,
    title: "Youtube",
    icon: IMAGES.youtube,
    link: "https://youtube.com/channel/UCStGpNYpG_2ROS6E6T-mvPg",
  },
  {
    id: 4,
    title: "Linkedin",
    icon: IMAGES.linkedin,
    link: "https://www.linkedin.com/company/codesi19",
  },
  {
    id: 6,
    title: "Github",
    icon: IMAGES.github,
    link: "https://github.com/codesi22",
  },
  {
    id: 7,
    title: "Kaggle",
    icon: IMAGES.kaggle,
    link: "https://www.kaggle.com/codeesi",
  },
];

export const PATHS_DATA: PathsDataProps[] = [
  {
    id: 0,
    path: "/",
    title: "Dashboard",
    icon: MdDashboard,
  },
  {
    id: 1,
    path: "/activities",
    title: "Activities",
    icon: MdLocalActivity,
  },
  {
    id: 3,
    path: "/about",
    title: "About Us",
    icon: MdContactSupport,
  },
];

export const ActivitiesData: ActivitiesDataProps[] = [
  {
    id: 0,
    title: "Training Classes",
    description:
      "In training classes we teach you how to understand, plan and code. To be able to create and collaborate real and effective projects.",
    icon: MdOutlineSchool,
    link: "training",
  },
  {
    id: 1,
    title: "Projects Classes",
    description:
      "In projects classes we teach you how to create and collaborate real and effective projects, after getting the basics and the skills while in training classes.",
    icon: MdOutlineAccountTree,
    link: "projects",
  },
  {
    id: 2,
    title: "Hackathons",
    description:
      "In Competitions Cell we train our students to be able to get more ideas and perspectives about each competitions relative to the IT.",
    icon: MdOutlineQuiz,
    link: "competitions",
  },
  {
    id: 3,
    title: "Sharing Nights",
    description:
      "Where we meet professionals from a specific domain with high experiences to get more informations about the domain and its situation in the current time and its differents fields, with interaction from our students.",
    icon: MdOutlineEmojiFoodBeverage,
    link: "sharing-nights",
  },
  {
    id: 4,
    title: "Visits",
    description:
      "Where we visit the differents entreprises and companies that are in the IT sector to get more informations about there structure and there work process,...",
    icon: MdWorkOutline,
    link: "visits",
  },
  {
    id: 5,
    title: "Collaborations",
    description:
      "All projects and events that we have organized with other Clubs from our school or other schools.",
    icon: MdOutlineGroupWork,
    link: "collaborations",
  },
  {
    id: 6,
    title: "Gaming",
    description:
      "Organizing and managing events and competitions in the E-Sports and Gaming fields.",
    icon: MdOutlineSportsEsports,
    link: "gaming",
  },
];
