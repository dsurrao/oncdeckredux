import { ReceptorStatusEnum } from '../enums/receptor-status.enum';
import { ReceptorStrengthEnum } from '../enums/receptor-strength.enum';

export interface ErReceptor {
    status: ReceptorStatusEnum;
    strength?: ReceptorStrengthEnum;
}