import { BiopsySiteEnum } from './biopsy-site-enum';
import { LymphNodeLocationEnum } from './lymph-node-location-enum';
import { SideEnum } from '../side-enum';

export interface BiopsySite {
    site: BiopsySiteEnum,
    side?: SideEnum,
    lymphNodeLocation?: LymphNodeLocationEnum,
    lymphNodeLocationOther?: string,
    bone?: string,
    siteOther?: string
}