export const sideBarConfig = [
  {
    title: "Dashboards",
    navItems: [
      {
        icon: "ChartPieSlice.png",

        name: "Default",
        value: "Default",
        id: "id-1",
        type: "item",
        children: [],
      },
      {
        icon: "Notebook.png",

        name: "Order List",
        value: "Orderlist",
        id: "id-22",
        type: "item",
        children: [],
      },
      {
        icon: "ShoppingBagOpen.png",

        name: "eCommerce",
        value: "eCommerce",
        id: "id-2",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-3",
            type: "item",
            children: [],
          },
        ],
      },
      {
        icon: "FolderNotch.png",

        name: "Projects",
        value: "Projects",
        id: "id-4",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-5",
            type: "item",
            children: [],
          },
        ],
      },
      {
        icon: "BookOpen.png",

        name: "Open Courses",
        value: "Open Courses",
        id: "id-6",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-7",
            type: "item",
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    navItems: [
      {
        icon: "IdentificationBadge.png",

        name: "User Profile",
        value: "User Profile",
        id: "id-8",
        type: "group",
        children: [
          {
            icon: "",
            name: "Overview",
            value: "Overview",
            id: "id-9",
            type: "item",
            children: [],
          },
          {
            icon: "",
            name: "Projects",
            value: "Projects",
            id: "id-10",
            type: "item",
            children: [],
          },
          {
            icon: "",
            name: "Campaigns",
            value: "Campaigns",
            id: "id-11",
            type: "item",
            children: [],
          },
          {
            icon: "",
            name: "Documents",
            value: "Documents",
            id: "id-12",
            type: "item",
            children: [],
          },
          {
            icon: "",
            name: "Followers",
            value: "Followers",
            id: "id-13",
            type: "item",
            children: [],
          },
        ],
      },
      {
        name: "Account",
        value: "Account",
        icon: "IdentificationCard.png",
        id: "id-14",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-15",
            type: "item",
            children: [],
          },
        ],
      },
      {
        name: "Corporate",
        value: "Corporate",
        icon: "UsersThree.png",
        id: "id-16",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-17",
            type: "item",
            children: [],
          },
        ],
      },
      {
        name: "Blog",
        value: "Blog",
        icon: "Notebook.png",
        id: "id-18",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-19",
            type: "item",
            children: [],
          },
        ],
      },
      {
        name: "Social",
        value: "Social",
        icon: "ChatsTeardrop.png",
        id: "id-20",
        type: "group",
        children: [
          {
            icon: "",

            name: "NA",
            value: "NA",
            id: "id-21",
            type: "item",
            children: [],
          },
        ],
      },
    ],
  },
];

export const navBarConfig = [
  { icon: "Sun.png", type: "theme" },
  { icon: "ClockCounterClockwise.png", type: "" },
  { icon: "Bell.png", type: "" },
  { icon: "Sidebar.png", type: "right_sibebar" },
];

export const rightBarConfig = [
  {
    title: "Notifications",
    type: "default",
    data: [
      {
        text: "You have bug that needs...",
        date: "Just now",
        icon: "BugBeetle.svg",
      },
      {
        text: "New user registered",
        date: "59 minutes ago",
        icon: "User.svg",
      },
      {
        text: "You have a bug that needs...",
        date: "12 hours ago",
        icon: "BugBeetle.svg",
      },
      {
        text: "Andi Lane subscribed to you...",
        date: "Today, 11:59 AM",
        icon: "Broadcast.svg",
      },
    ],
  },
  {
    title: "Activities",
    type: "connecting",
    data: [
      {
        text: "You have a bug that needs...",
        date: "Just now",
        icon: "3D05.png",
      },
      {
        text: "Released a new version",
        date: "59 minutes ago",
        icon: "Female05.png",
      },
      {
        text: "Submitted a bug",
        date: "12 hours ago",
        icon: "3D08.png",
      },
      {
        text: "Modified A data in Page X",
        date: "Today, 11:59 AM",
        icon: "Male07.png",
      },
      {
        text: "Deleted a page in Project X",
        date: "Feb 2, 2023",
        icon: "Male11.png",
      },
    ],
  },
  {
    title: "Contacts",
    type: "without_date",
    data: [
      {
        icon: "Female15.png",
        text: "Natali Craig",
      },
      {
        icon: "Male08.png",
        text: "Drew Cano",
      },
      {
        icon: "Male06.png",
        text: "Orlando Diggs",
      },
      {
        icon: "Female08.png",
        text: "Andi Lane",
      },
      {
        icon: "Female09.png",
        text: "Kate Morrison",
      },
      {
        icon: "3D03.png",
        text: "Koray Okumus",
      },
    ],
  },
];

export const dashboardStatsConfig = [
  {
    cardName: "Customers",
    price: "3,781",
    profit: "+11.01%",
    icon: "ArrowRise.png",
    bgColor: "#e3f5ff",
  },

  {
    cardName: "Orders",
    price: "1,219",
    profit: "-0.03%",
    icon: "ArrowFall.png",
  },
  {
    cardName: "Revenue",
    price: "$695",
    profit: "+15.03%",
    icon: "ArrowRise.png",
  },
  {
    cardName: "Growth",
    price: "3,781",
    profit: "+11.01%",
    icon: "ArrowRise.png",
    bgColor: "#e5ecf6",
  },
];
export const dashboardRestConfig = [
  {
    type: "bar_widget",
    title: "",
    width: 6,
    height: "252px",
  },
  {
    type: "line_widget",
    title: "",
    width: 9,
    height: "318px",
  },
  {
    type: "map_widget",
    title: "",
    width: 3,
    height: "318px",
  },
  {
    type: "table_widget",
    title: "",
    width: 9,
    height: "336px",
  },
  {
    type: "donut_widget",
    title: "",
    width: 3,
    height: "344px",
  },
];
