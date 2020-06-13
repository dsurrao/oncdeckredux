import { ErReceptor } from './er-receptor.model';
import { PrReceptor } from './pr-receptor.model';
import { Her2Receptor } from './her2-receptor.model';

export interface Receptors {
    erReceptor: ErReceptor;
    prReceptor: PrReceptor;
    her2Receptor: Her2Receptor;
}