import { Her2TestEnum } from './her2-test-enum';
import { BiopsyReceptorStatusEnum } from './biopsy-receptor-status-enum';

export interface Her2Receptor {
    status: BiopsyReceptorStatusEnum;
    test: Her2TestEnum;
}