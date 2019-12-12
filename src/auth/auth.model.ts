import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'joao', description: 'login do usuário' })
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '123456', description: 'senha do usuário', })
    readonly password: string;
}
