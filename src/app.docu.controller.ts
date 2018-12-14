import { Get, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { apiDocs, ApiDocs } from './water-fill.docu';

@Controller()
@UsePipes(new ValidationPipe())
export class DocsController {
  constructor() {}

  @Get()
  getDocs(): ApiDocs {
    return apiDocs;
  }
}
