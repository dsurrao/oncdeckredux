import { ValidationErrors } from '@angular/forms';
import { SurgicalPathology } from '../models/surgery/surgical-pathology.model';
import { ProcedureStatusEnum } from '../models/enums/procedure-status.enum';
import { ReceptorStatusEnum } from '../models/enums/receptor-status.enum';

export const validateSurgicalPathology = (sp: SurgicalPathology): 
    ValidationErrors | null => {
    let errors: ValidationErrors = null;

    if (!sp) {
        errors = { 'SurgicalPathology': 'is empty' };
    }
    else {
        if (!sp.status) {
            errors = { 'status': 'is empty' };
        }
        else {
            switch (sp.status) {
                case ProcedureStatusEnum.NotDone:
                    if (!sp.statusReason) {
                        errors = { 'statusReason': 'is empty' };
                    }
                    else if (sp.reportDate) {
                        errors = { 'reportDate': 'should be empty'};
                    }
                    else if (sp.features.grade || sp.features.lvi) {
                        errors = { 'features': 'should be empty' };
                    }
                    else if (sp.histology.histology || sp.histology.histologyOther) {
                        errors = { 'histology': 'should be empty' };
                    }
                    else if (sp.lymphNodeDissectionType) {
                        errors = { 'lymphNodeDissectionType': 'should be empty' };
                    }
                    else if (
                        (sp.receptors.erReceptor.status 
                            && sp.receptors.erReceptor.status != ReceptorStatusEnum.Unknown)
                        || sp.receptors.erReceptor.strength) {
                        errors = { 'ER receptors': 'should be empty' };
                    }
                    else if (
                        (sp.receptors.prReceptor.status 
                            && sp.receptors.prReceptor.status != ReceptorStatusEnum.Unknown)
                        || sp.receptors.prReceptor.strength) {
                        errors = { 'PR receptors': 'should be empty' };
                    }
                    else if (
                        (sp.receptors.her2Receptor.status 
                            && sp.receptors.her2Receptor.status != ReceptorStatusEnum.Unknown)
                        || sp.receptors.her2Receptor.test) {
                        errors = { 'HER2 receptors': 'should be empty' };
                    }
                    else if (sp.surgicalMargins) {
                        errors = { 'surgicalMargins': 'should be empty' };
                    }

                    break;
                case ProcedureStatusEnum.Completed:
                    if (!sp.reportDate) {
                        errors = { 'reportDate': 'is empty' };
                    }
                    else if (!sp.status) {
                        errors = { 'status': 'is empty' };
                    }

                    if (sp.receptors.erReceptor.status == ReceptorStatusEnum.Positive) {
                        if (!sp.receptors.erReceptor.strength) {
                            errors = { 'ER strength': 'is empty' };
                        }
                    }
                    else if (sp.receptors.erReceptor.strength) {
                        errors = { 'ER strength': 'should be empty' };
                    }

                    if (sp.receptors.prReceptor.status == ReceptorStatusEnum.Positive) {
                        if (!sp.receptors.prReceptor.strength) {
                            errors = { 'PR strength': 'is empty' };
                        }
                    }
                    else if (sp.receptors.prReceptor.strength) {
                        errors = { 'PR strength': 'should be empty' };
                    }

                    if (sp.receptors.her2Receptor.status == ReceptorStatusEnum.Positive
                        || sp.receptors.her2Receptor.status == ReceptorStatusEnum.Negative) {
                        if (!sp.receptors.her2Receptor.test) {
                            errors = { 'HER2 test': 'is empty' };
                        }
                    }
                    else if (sp.receptors.her2Receptor.test) {
                        errors = { 'HER2 test': 'should be empty' };
                    }

                    break;
                default:
                    errors = { 'status': 'invalid value \'' + sp.status + '\'' };
            }
        }
    }

    return errors;
}