import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

interface CarouselImage {
  src: string;
  alt?: string;
  title?: string;
}

interface CarouselConfig {
  autoplayInterval?: number;
  autoplay?: boolean;
  dotsBtn?: boolean;
  arrowsBtn?: boolean;
  infinityCarousel?: boolean;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  // Carousel images
  @Input() images!: CarouselImage[];
  // Carousel configurations
  @Input() carouselConfig: CarouselConfig = {
    autoplayInterval: 7000,
    autoplay: true,
    dotsBtn: true,
    arrowsBtn: true,
    infinityCarousel: true,
  };

  @ViewChild('carouselContainer')
  carouselContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('carousel') carouselImg!: ElementRef<HTMLDivElement>;

  // Index control
  private carouselIndex = 0;
  get currentIndex(): number {
    return this.carouselIndex;
  }

  ngOnInit(): void {
    // Enable autoplay
    if (this.carouselConfig.autoplay) {
      setInterval(
        () => this.onClickRight(),
        this.carouselConfig.autoplayInterval
      );
    }
  }

  onClickLeft() {
    if (this.carouselIndex > 0) {
      this.carouselContainer.nativeElement.scrollLeft -=
        this.carouselImg.nativeElement.children.item(this.carouselIndex)
          ?.clientWidth || 0;

      this.carouselIndex--;

      // If the option of infinity is active go back to the first image
    } else if (this.carouselConfig.infinityCarousel) {
      let positionWidth = 0;

      for (let i = 0; i < this.carouselImg.nativeElement.children.length; i++) {
        positionWidth +=
          this.carouselImg.nativeElement.children.item(i)?.clientWidth || 0;
      }
      this.carouselContainer.nativeElement.scrollLeft = positionWidth;

      this.carouselIndex = this.carouselImg.nativeElement.children.length - 1;
    }
  }

  onClickRight() {
    if (
      this.carouselIndex <
      this.carouselImg.nativeElement.children.length - 1
    ) {
      this.carouselContainer.nativeElement.scrollLeft +=
        this.carouselImg.nativeElement.children.item(this.carouselIndex)
          ?.clientWidth || 0;

      this.carouselIndex++;

      // If the option of infinity is active go to the last image
    } else if (this.carouselConfig.infinityCarousel) {
      this.carouselContainer.nativeElement.scrollLeft = 0;
      this.carouselIndex = 0;
    }
  }

  // Put position passed by dots btn
  onSetPosition(index: number) {
    let positionWidth = 0;

    for (let i = 0; i < index; i++) {
      positionWidth +=
        this.carouselImg.nativeElement.children.item(i)?.clientWidth || 0;
    }

    this.carouselContainer.nativeElement.scrollLeft = positionWidth;

    this.carouselIndex = index;
  }
}
