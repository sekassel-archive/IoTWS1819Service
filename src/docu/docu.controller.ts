import { Get, Controller, UsePipes, ValidationPipe } from '@nestjs/common';

import { apiDocs } from './docu';
import { ApiDocs } from './docu.interface';

@Controller()
@UsePipes(new ValidationPipe())
export class DocsController {
  @Get()
  getDocs(): ApiDocs {
    return apiDocs;
  }
}
