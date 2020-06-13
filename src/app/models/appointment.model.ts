import { BiopsyTypeEnum } from './enums/biopsy-type.enum';
import { SurgeryTypeEnum } from './enums/surgery-type.enum';
import { ProviderTypeEnum } from './enums/provider-type.enum';

export interface Appointment {
    id: string;
    startDate: string;
    facility: string;
    contactPerson: string;
    appointmentType: BiopsyTypeEnum | SurgeryTypeEnum;
    providerName?: string;
    providerType?: ProviderTypeEnum;
}