import { Biopsy } from '../models/biopsy/biopsy.model';
import { ProcedureStatusEnum } from '../models/enums/procedure-status.enum';
import * as dateUtilities from 'src/app/utilities/date-utilities';
import { BiopsySiteEnum } from '../models/enums/biopsy-site.enum';
import { LymphNodeLocationEnum } from '../models/enums/lymph-node-location-enum';
import { ValidationErrors } from '@angular/forms';

// todo: add validation against related appointment
export const validateBiopsy = (biopsy: Biopsy):
    ValidationErrors => {
    let validationErrors = null;

    switch (biopsy.status) {
        case ProcedureStatusEnum.NotDone:
            if (!biopsy.statusReason) {
                validationErrors = { 'statusReason': 'is empty' };
            }

            break;
        case ProcedureStatusEnum.Completed:
            if (!biopsy.pathologyReportDate) {
                validationErrors = { 'pathologyReportDate': 'is empty' };
            }
            else if (dateUtilities.isFutureDate(biopsy.pathologyReportDate)) {
                validationErrors = { 'pathologyReportDate': 'is in the future' };
            }

            if (!biopsy.site) {
                validationErrors = { 'site': 'is empty' };
            }
            else {
                if (!biopsy.site.site) {
                    validationErrors = { 'site': 'is empty' };
                }
                else {
                    switch (biopsy.site.site) {
                        case BiopsySiteEnum.Other:
                            if (!biopsy.site.siteOther) {
                                validationErrors = { 'siteOther': 'is empty' };
                            }
                           
                            if (biopsy.site.lymphNodeLocation
                                || biopsy.site.lymphNodeLocationOther) {
                                    validationErrors = { 'site': 
                                        'invalid options for site \''
                                    + BiopsySiteEnum.Other + '\'' };
                            }
                            
                            break;
                        case BiopsySiteEnum.Breast:
                            if (!biopsy.site.side) {
                                validationErrors = { 'side': 'is empty' };
                            }

                            if (biopsy.site.lymphNodeLocation
                                || biopsy.site.lymphNodeLocationOther
                                || biopsy.site.siteOther) {
                                validationErrors = { 'site': 
                                    'invalid options for site \''
                                + BiopsySiteEnum.Breast + '\'' };
                            }

                            break;
                        case BiopsySiteEnum.LymphNode:
                            if (!biopsy.site.side) {
                                validationErrors = { 'side': 'is empty' };
                            }

                            if (!biopsy.site.lymphNodeLocation) {
                                validationErrors = { 'lymphNodeLocation': 
                                    'is empty' };
                            }
                            else {
                                if (biopsy.site.lymphNodeLocation 
                                    == LymphNodeLocationEnum.Other 
                                    && !biopsy.site.lymphNodeLocationOther) {
                                    validationErrors = { 'lymphNodeLocationOther': 
                                        'is empty' };
                                }
                            }

                            if (biopsy.site.siteOther) {
                                validationErrors = { 'site': 
                                    'invalid options for site \''
                                    + BiopsySiteEnum.LymphNode + '\'' };
                            }

                            break;
                    }
                }

            }

            break;
        default:
            validationErrors = { 'status': 'invalid value \'' + biopsy.status 
                + '\'' };
    }

    return validationErrors;
}