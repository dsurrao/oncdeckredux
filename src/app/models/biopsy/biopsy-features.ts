import { BiopsyGradeEnum } from './biopsy-grade-enum';
import { BiopsyLviStatusEnum } from './biopsy-lvi-status-enum';

export interface BiopsyFeatures {
    grade: BiopsyGradeEnum,
    lvi: BiopsyLviStatusEnum
}