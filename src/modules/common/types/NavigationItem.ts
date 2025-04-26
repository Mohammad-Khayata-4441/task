import { FileRouteTypes } from "@/routeTree.gen";

export interface NavigationItem {
    exact?: boolean;
    label: string;
    icon?: React.ElementType;
    description?: string;
    path?: FileRouteTypes['to'] | string;
    children?: NavigationItem[];
    isNode?: boolean;
    isActive?: boolean;
    hideInSidebar?: boolean;
    permission?: string;
    isPublic?: boolean;
    group?: string;
}


