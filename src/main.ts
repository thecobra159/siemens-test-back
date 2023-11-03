import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Siemens Test API - Back-end application')
        .setDescription('Siemens Test API to manage measure equipments')
        .setVersion('1.0')
        .addTag('equipment')
        .addTag('point')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    )
    app.enableCors()
    await app.listen(3003)
}
bootstrap()
