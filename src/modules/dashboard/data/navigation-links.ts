import { NavigationItem } from "@/modules/common/types/NavigationItem"
import {
    CampaignOutlined,
    FilterAltOutlined,
    ChatOutlined,
    GroupOutlined,
    ShoppingCartOutlined,
    HelpOutlined,
    NotificationsOutlined,
    CategoryOutlined,
    PublicOutlined,
    ViewCarouselOutlined,
    AdUnitsOutlined,
    LocalOfferOutlined,
    AdminPanelSettingsOutlined,
    ManageAccountsOutlined,
    SettingsOutlined
} from "@mui/icons-material";

export const navigationItems: NavigationItem[] = [
    { label: "navigation.statistics", path: "/", icon: CampaignOutlined },
    { label: "navigation.advancedSearch", path: "/advanced-search", icon: FilterAltOutlined },
    { label: "navigation.conversations", path: "/conversations", icon: ChatOutlined },
    { label: "navigation.users", path: "/users", icon: GroupOutlined, children: [] },
    { label: "navigation.orders", path: "/orders", icon: ShoppingCartOutlined, children: [] },
    { label: "navigation.questions", path: "/questions", icon: HelpOutlined },
    { label: "navigation.pointsAndNotifications", path: "/points-notifications", icon: NotificationsOutlined },
    { label: "navigation.giftCategories", path: "/gift-categories", icon: CategoryOutlined },
    { label: "navigation.countries", path: "/countries", icon: PublicOutlined, children: [] },
    { label: "navigation.adZones", path: "/ad-zones", icon: ViewCarouselOutlined },
    { label: "navigation.ads", path: "/ads", icon: AdUnitsOutlined },
    { label: "navigation.specialOffers", path: "/special-offers", icon: LocalOfferOutlined },
    { label: "navigation.adminUsers", path: "/admin-users", icon: AdminPanelSettingsOutlined, children: [] },
    { label: "navigation.management", path: "/management", icon: ManageAccountsOutlined },
    { label: "navigation.generalSettings", path: "/general-settings", icon: SettingsOutlined }
];

