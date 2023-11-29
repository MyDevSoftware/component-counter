//abstract
import AbstractLocalstorageService from '../../../abstract/abstract-localstorage.service';
//types
import type { LocalstorageNamesType } from '../../../types/localstorage-types';
import type { ChemistryDataType } from '../types/chemistry-data-types';
//variables
import { CHEMISTRY_STORAGE_NAME } from '../variables/data-variables';

class ChemistryLocalstorageService extends AbstractLocalstorageService<ChemistryDataType> {
  constructor(storageName: LocalstorageNamesType) {
    super(storageName);
  }
}

const chemistryLocalstorageService = new ChemistryLocalstorageService(CHEMISTRY_STORAGE_NAME);

export default chemistryLocalstorageService;
