import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.page.html',
  styleUrls: ['./photo-preview.page.scss']
})
export class PhotoPreviewPage implements OnInit {
  constructor(public photoService: PhotoService) {}

  ngOnInit() {}
}
