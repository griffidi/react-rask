import { rand } from '@ngneat/falso';
import {
  LOCATION_STATE_AK_ID,
  LOCATION_STATE_AR_ID,
  LOCATION_STATE_AZ_ID,
  LOCATION_STATE_CA_ID,
  LOCATION_STATE_CO_ID,
  LOCATION_STATE_CT_ID,
  LOCATION_STATE_DE_ID,
  LOCATION_STATE_FL_ID,
  LOCATION_STATE_GA_ID,
  LOCATION_STATE_HI_ID,
  LOCATION_STATE_IA_ID,
  LOCATION_STATE_ID_ID,
  LOCATION_STATE_IL_ID,
  LOCATION_STATE_IN_ID,
  LOCATION_STATE_KS_ID,
  LOCATION_STATE_KY_ID,
  LOCATION_STATE_LA_ID,
  LOCATION_STATE_MA_ID,
  LOCATION_STATE_MD_ID,
  LOCATION_STATE_ME_ID,
  LOCATION_STATE_MI_ID,
  LOCATION_STATE_MN_ID,
  LOCATION_STATE_MO_ID,
  LOCATION_STATE_MS_ID,
  LOCATION_STATE_MT_ID,
  LOCATION_STATE_NC_ID,
  LOCATION_STATE_ND_ID,
  LOCATION_STATE_NE_ID,
  LOCATION_STATE_NH_ID,
  LOCATION_STATE_NJ_ID,
  LOCATION_STATE_NM_ID,
  LOCATION_STATE_NV_ID,
  LOCATION_STATE_NY_ID,
  LOCATION_STATE_OH_ID,
  LOCATION_STATE_OK_ID,
  LOCATION_STATE_OR_ID,
  LOCATION_STATE_PA_ID,
  LOCATION_STATE_RI_ID,
  LOCATION_STATE_SC_ID,
  LOCATION_STATE_SD_ID,
  LOCATION_STATE_TN_ID,
  LOCATION_STATE_TX_ID,
  LOCATION_STATE_UT_ID,
  LOCATION_STATE_VA_ID,
  LOCATION_STATE_VT_ID,
  LOCATION_STATE_WA_ID,
  LOCATION_STATE_WI_ID,
  LOCATION_STATE_WV_ID,
  LOCATION_STATE_WY_ID,
} from '../location-states.js';

const locationStateIds = [
  LOCATION_STATE_AK_ID,
  LOCATION_STATE_AZ_ID,
  LOCATION_STATE_AR_ID,
  LOCATION_STATE_CA_ID,
  LOCATION_STATE_CO_ID,
  LOCATION_STATE_CT_ID,
  LOCATION_STATE_DE_ID,
  LOCATION_STATE_FL_ID,
  LOCATION_STATE_GA_ID,
  LOCATION_STATE_HI_ID,
  LOCATION_STATE_ID_ID,
  LOCATION_STATE_IL_ID,
  LOCATION_STATE_IN_ID,
  LOCATION_STATE_IA_ID,
  LOCATION_STATE_KS_ID,
  LOCATION_STATE_KY_ID,
  LOCATION_STATE_LA_ID,
  LOCATION_STATE_ME_ID,
  LOCATION_STATE_MD_ID,
  LOCATION_STATE_MA_ID,
  LOCATION_STATE_MI_ID,
  LOCATION_STATE_MN_ID,
  LOCATION_STATE_MS_ID,
  LOCATION_STATE_MO_ID,
  LOCATION_STATE_MT_ID,
  LOCATION_STATE_NE_ID,
  LOCATION_STATE_NV_ID,
  LOCATION_STATE_NH_ID,
  LOCATION_STATE_NJ_ID,
  LOCATION_STATE_NM_ID,
  LOCATION_STATE_NY_ID,
  LOCATION_STATE_NC_ID,
  LOCATION_STATE_ND_ID,
  LOCATION_STATE_OH_ID,
  LOCATION_STATE_OK_ID,
  LOCATION_STATE_OR_ID,
  LOCATION_STATE_PA_ID,
  LOCATION_STATE_RI_ID,
  LOCATION_STATE_SC_ID,
  LOCATION_STATE_SD_ID,
  LOCATION_STATE_TN_ID,
  LOCATION_STATE_TX_ID,
  LOCATION_STATE_UT_ID,
  LOCATION_STATE_VT_ID,
  LOCATION_STATE_VA_ID,
  LOCATION_STATE_WA_ID,
  LOCATION_STATE_WV_ID,
  LOCATION_STATE_WI_ID,
  LOCATION_STATE_WY_ID,
];

export function randLocationStateId() {
  return rand(locationStateIds);
}
