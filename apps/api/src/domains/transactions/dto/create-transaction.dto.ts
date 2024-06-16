import { ApiProperty } from '@nestjs/swagger';
import { Types } from '@prisma/client';
import { IsNotEmpty, Matches, Min } from 'class-validator';
import { regex } from 'src/helpers/regex.helper';

export type TransactionEnum = Types;

export class CreateTransactionDTO {
  @ApiProperty({
    minimum: 0,
    default: '00.00',
    example: '37.50',
    description: 'Value to transaction',
  })
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @ApiProperty({
    example: 'Buy the new item for car ...',
    description: 'Description to transaction',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'INPUT',
    description: 'Type to transaction',
    default: 'INPUT',
    enum: ['INPUT', 'OUTPUT'],
  })
  @IsNotEmpty()
  @Matches(regex.typeTransaction, { message: 'Type must be INPUT or OUTPUT' })
  type: TransactionEnum;

  @ApiProperty({
    default: new Date().toISOString(),
    description: 'Date to payment',
  })
  @IsNotEmpty()
  paymentDate: Date;

  @ApiProperty({
    description: 'Tags to you transaction',
    default: [1],
  })
  tags: number[];

  @ApiProperty()
  @ApiProperty({
    description: 'Planning id to you transaction',
  })
  planningId?: string;
}
