import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';
import { BaseResDto } from 'src/base/dto/base.dto';

export class AlbumDto {
  @ApiProperty({ description: 'id', example: 1 })
  readonly id: number;

  @ApiProperty({ description: '标题', example: 'Sky' })
  @IsNotEmpty({ message: 'title is required' })
  readonly title: string;

  @ApiProperty({ description: '中文标题', example: '光遇' })
  @IsNotEmpty({ message: 'zh_title is required' })
  readonly zh_title: string;

  @ApiProperty({
    description: '相册封面',
    example:
      'https://yuanki-1256318267.cos.ap-shanghai.myqcloud.com/light_and_you/IMG_1595.JPG',
  })
  @IsNotEmpty({ message: 'cover_url is required' })
  readonly cover_url: string;

  @ApiProperty({ description: '是否删除', example: 1 })
  @IsNotEmpty({ message: 'del is required' })
  @IsInt({ message: 'del must be an integer 0 or 1' })
  readonly del: number;

  @ApiProperty({
    description: '创建时间',
    example: '2024-01-12T07:38:49.000Z',
  })
  readonly create_time: Date;

  @ApiProperty({
    description: '更新时间',
    example: '2024-01-12T07:38:49.000Z',
  })
  readonly update_time: Date;
}

export class CreateAlbumsResDto extends BaseResDto {
  @ApiProperty({ description: 'data', type: Object })
  readonly data: Record<any, any>;
}
