import { BiopsySiteEnum } from '../enums/biopsy-site.enum';
import { LymphNodeLocationEnum } from '../enums/lymph-node-location-enum';
import { SideEnum } from '../enums/side.enum';

export interface BiopsySite {
    site: BiopsySiteEnum,
    side?: SideEnum,
    lymphNodeLocation?: LymphNodeLocationEnum,
    lymphNodeLocationOther?: string,
    bone?: string,
    siteOther?: string
}