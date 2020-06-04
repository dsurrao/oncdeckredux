import { BiopsyReceptorStatusEnum } from './biopsy-receptor-status-enum';
import { BiopsyReceptorStrengthEnum } from './biopsy-receptor-strength-enum';

export interface ErReceptor {
    status: BiopsyReceptorStatusEnum;
    strength?: BiopsyReceptorStrengthEnum;
}