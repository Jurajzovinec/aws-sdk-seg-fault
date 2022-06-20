import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
const segfaultHandler = require('node-segfault-handler');

@Injectable()
export class S3Service {
  private readonly config: S3ClientConfig;
  private readonly client: S3Client;

  public constructor() {
    this.config = {
      credentials: { accessKeyId: 'cloudtalk', secretAccessKey: 'cloudtalk' },
      region: 'eu-central-1',
    };
    segfaultHandler.registerHandler();
    this.client = new S3Client(this.config);
    console.log(this.client);
  }
}
