import { ErReceptor } from './er-receptor';
import { PrReceptor } from './pr-receptor';
import { Her2Receptor } from './her2-receptor';

export interface BiopsyReceptors {
    erReceptor: ErReceptor;
    prReceptor: PrReceptor;
    her2Receptor: Her2Receptor;
}