import { ReceptorStatusEnum } from '../enums/receptor-status.enum';
import { ReceptorStrengthEnum } from '../enums/receptor-strength.enum';

export interface PrReceptor {
    status: ReceptorStatusEnum;
    strength?: ReceptorStrengthEnum;
}