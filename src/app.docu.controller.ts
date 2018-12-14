import { Get, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { apiDocu } from './water-fill.docu';

@Controller()
@UsePipes(new ValidationPipe())
export class DocuController {
  constructor() {}

  @Get()
  getDocu(): any {
    return apiDocu;
  }
}
