import { BiopsySite } from './biopsy-site.model';
import { Histology } from '../common/histology.model';
import { Receptors } from '../common/receptors.model';
import { Features } from '../common/features.model';
import { BiopsyTypeEnum } from '../enums/biopsy-type.enum';

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
  histology?: Histology;
  receptors?: Receptors;
  features?: Features;
}
