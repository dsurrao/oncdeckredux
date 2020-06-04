import { BiopsySite } from './biopsy-site';
import { BiopsyHistology } from './biopsy-histology';
import { BiopsyReceptors } from './biopsy-receptors';
import { BiopsyFeatures } from './biopsy-features';
import { BiopsyTypeEnum } from './biopsy-type-enum';

export interface Biopsy {
  id: string;
  scheduledDate: string;
  facilityName: string;
  contactPerson?: string;
  providerName?: string;
  procedureDate?: string;
  pathologyReportDate?: string;
  type?: BiopsyTypeEnum;
  site?: BiopsySite;
  histology?: BiopsyHistology;
  receptors?: BiopsyReceptors;
  features?: BiopsyFeatures;
}
