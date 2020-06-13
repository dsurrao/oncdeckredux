import { Her2TestEnum } from '../enums/her2-test.enum';
import { ReceptorStatusEnum } from '../enums/receptor-status.enum';

export interface Her2Receptor {
    status: ReceptorStatusEnum;
    test: Her2TestEnum;
}