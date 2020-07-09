import { Biopsy } from '../models/biopsy/biopsy.model';
import { ProcedureStatusEnum } from '../models/enums/procedure-status.enum';
import * as dateUtilities from 'src/app/utilities/date-utilities';
import { BiopsySiteEnum } from '../models/enums/biopsy-site.enum';
import { LymphNodeLocationEnum } from '../models/enums/lymph-node-location-enum';
import { ValidationErrors } from '@angular/forms';
import { HistologyEnum } from '../models/enums/histology.enum';
import { ReceptorStatusEnum } from '../models/enums/receptor-status.enum';

// todo: add validation against related appointment
export const validateBiopsy = (biopsy: Biopsy):
    ValidationErrors | null => {
    let errors: ValidationErrors = null;

    switch (biopsy.status) {
        case ProcedureStatusEnum.NotDone:
            if (!biopsy.statusReason) {
                errors = { 'statusReason': 'is empty' };
            }
            else if (biopsy.site.site) {
                errors = { 'site': 'should be empty' };
            }
            else if (biopsy.features.grade || biopsy.features.lvi) {
                errors = { 'features': 'should be empty' };
            }
            else if (biopsy.histology.histology || biopsy.histology.histologyOther) {
                errors = { 'histology': 'should be empty' };
            }
            else if (biopsy.pathologyReportDate) {
                errors = { 'pathologyReportDate': 'should be empty' };
            }
            else if ((biopsy.receptors.erReceptor.status 
                && biopsy.receptors.erReceptor.status != ReceptorStatusEnum.Unknown)
                || biopsy.receptors.erReceptor.strength) {
                errors = { 'erReceptor': 'should be empty' };
            }
            else if ((biopsy.receptors.prReceptor.status 
                && biopsy.receptors.prReceptor.status != ReceptorStatusEnum.Unknown)
                || biopsy.receptors.prReceptor.strength) {
                errors = { 'prReceptor': 'should be empty' };
            }
            else if ((biopsy.receptors.her2Receptor.status 
                && biopsy.receptors.her2Receptor.status != ReceptorStatusEnum.Unknown)
                || biopsy.receptors.her2Receptor.test) {
                errors = { 'her2Receptor': 'should be empty' };
            }

            break;
        case ProcedureStatusEnum.Completed:
            if (!biopsy.pathologyReportDate) {
                errors = { 'pathologyReportDate': 'is empty' };
            }
            else if (dateUtilities.isFutureDate(biopsy.pathologyReportDate)) {
                errors = { 'pathologyReportDate': 'is in the future' };
            }
            else if (!biopsy.site) {
                errors = { 'site': 'is empty' };
            }
            else {
                if (!biopsy.site.site) {
                    errors = { 'site': 'is empty' };
                }
                else {
                    switch (biopsy.site.site) {
                        case BiopsySiteEnum.Other:
                            if (!biopsy.site.siteOther) {
                                errors = { 'siteOther': 'is empty' };
                            }
                            else if (biopsy.site.lymphNodeLocation
                                || biopsy.site.lymphNodeLocationOther) {
                                    errors = { 'site':
                                        'invalid options for site \''
                                        + BiopsySiteEnum.Other + '\'' };
                            }
                            
                            break;
                        case BiopsySiteEnum.Breast:
                            if (!biopsy.site.side) {
                                errors = { 'side': 'is empty' };
                            }
                            else if (biopsy.site.lymphNodeLocation
                                || biopsy.site.lymphNodeLocationOther
                                || biopsy.site.siteOther) {
                                    errors = { 'site':
                                        'invalid options for site \''
                                            + BiopsySiteEnum.Breast + '\'' };
                            }

                            break;
                        case BiopsySiteEnum.LymphNode:
                            if (!biopsy.site.side) {
                                errors = { 'side': 'is empty' };
                            }
                            else if (!biopsy.site.lymphNodeLocation) {
                                errors = { 'lymphNodeLocation': 'is empty' };
                            }
                            else if (biopsy.site.lymphNodeLocation 
                                    == LymphNodeLocationEnum.Other 
                                    && !biopsy.site.lymphNodeLocationOther) {
                                errors = { 'lymphNodeLocationOther': 'is empty' };
                            }
                            else if (biopsy.site.siteOther) {
                                errors = { 'site':
                                    'invalid options for site \''
                                        + BiopsySiteEnum.LymphNode + '\'' };
                            }

                            break;
                    }
                }
            }

            if (!biopsy.histology) {
                errors = { 'histology': 'is empty' };
            }
            else if (!biopsy.histology.histology) {
                errors = { 'histology': 'is empty' };
            }
            else {
                if (biopsy.histology.histology == HistologyEnum.Other) {
                    if (!biopsy.histology.histologyOther) {
                        errors = { 'histologyOther': 'is empty' };
                    }
                }
                else {
                    if (biopsy.histology.histologyOther) {
                        errors = { 'histologyOther': 'should be empty' };
                    }
                }
            }

            break;
        default:
            errors = { 'status': 'invalid value \'' + biopsy.status 
                + '\''};
    }

    return errors;
}