import * as THREE from 'three';

export class AsciiEffect {
  private width: number;
  private height: number;
  private renderer: THREE.WebGLRenderer;
  private charSet: string;
  private options: {
    resolution: number;
    scale: number;
    color: boolean;
    alpha: boolean;
    block: boolean;
    invert: boolean;
    strResolution: 'low' | 'medium' | 'high';
  };
  public domElement: HTMLDivElement;
  private oCanvas: HTMLCanvasElement;
  private oCtx: CanvasRenderingContext2D;
  private oAscii: HTMLTableElement;
  private iWidth: number;
  private iHeight: number;
  private oImg: HTMLCanvasElement;

  constructor(
    renderer: THREE.WebGLRenderer,
    charSet: string = ' .:-=+*#%@',
    options: Partial<AsciiEffect['options']> = {}
  ) {
    this.renderer = renderer;
    this.charSet = charSet;
    this.options = {
      resolution: options.resolution ?? 0.15,
      scale: options.scale ?? 1,
      color: options.color ?? false,
      alpha: options.alpha ?? false,
      block: options.block ?? false,
      invert: options.invert ?? false,
      strResolution: options.strResolution ?? 'low'
    };

    this.domElement = document.createElement('div');
    this.domElement.style.cursor = 'default';

    this.oAscii = document.createElement('table');
    this.domElement.appendChild(this.oAscii);

    this.oCanvas = document.createElement('canvas');
    const ctx = this.oCanvas.getContext('2d');
    if (!ctx) {
      throw new Error('CanvasRenderingContext2D is not supported.');
    }
    this.oCtx = ctx;

    this.renderer.setSize(500, 500);
    this.oImg = this.renderer.domElement as HTMLCanvasElement;

    this.width = 0;
    this.height = 0;
    this.iWidth = 0;
    this.iHeight = 0;
  }

  setSize(w: number, h: number): void {
    this.width = w;
    this.height = h;
    this.renderer.setSize(w, h);
    this.initAsciiSize();
  }

  render(scene: THREE.Scene, camera: THREE.Camera): void {
    this.renderer.render(scene, camera);
    this.asciifyImage();
  }

  private initAsciiSize(): void {
    this.iWidth = Math.floor(this.width * this.options.resolution);
    this.iHeight = Math.floor(this.height * this.options.resolution);

    this.oCanvas.width = this.iWidth;
    this.oCanvas.height = this.iHeight;

    this.oAscii.cellSpacing = '0';
    this.oAscii.cellPadding = '0';

    const style = this.oAscii.style;
    style.whiteSpace = 'pre';
    style.margin = '0px';
    style.padding = '0px';
    style.fontFamily = 'courier new, monospace';
    style.fontSize = `${(2 / this.options.resolution) * this.options.scale}px`;
    style.lineHeight = `${(2 / this.options.resolution) * this.options.scale}px`;
    style.textAlign = 'left';
  }

  private asciifyImage(): void {
    if (this.iWidth === 0 || this.iHeight === 0) {
      console.warn('Skipping asciifyImage: Invalid dimensions');
      return;
    }

    this.oCtx.clearRect(0, 0, this.iWidth, this.iHeight);
    this.oCtx.drawImage(this.oImg, 0, 0, this.iWidth, this.iHeight);
    const oImgData = this.oCtx.getImageData(
      0,
      0,
      this.iWidth,
      this.iHeight
    ).data;

    let strChars = '';

    for (let y = 0; y < this.iHeight; y += 2) {
      for (let x = 0; x < this.iWidth; x++) {
        const iOffset = (y * this.iWidth + x) * 4;
        const iRed = oImgData[iOffset];
        const iGreen = oImgData[iOffset + 1];
        const iBlue = oImgData[iOffset + 2];
        const iAlpha = oImgData[iOffset + 3];

        let fBrightness = (0.3 * iRed + 0.59 * iGreen + 0.11 * iBlue) / 255;
        if (iAlpha === 0) {
          fBrightness = 1;
        }

        let iCharIdx = Math.floor(
          (1 - fBrightness) * (this.charSet.length - 1)
        );
        if (this.options.invert) {
          iCharIdx = this.charSet.length - iCharIdx - 1;
        }

        const strThisChar = this.charSet[iCharIdx] || '&nbsp;';

        if (this.options.color) {
          strChars += `<span style="color:rgb(${iRed},${iGreen},${iBlue}); ${
            this.options.block
              ? `background-color:rgb(${iRed},${iGreen},${iBlue});`
              : ''
          } ${this.options.alpha ? `opacity:${iAlpha / 255};` : ''}">${strThisChar}</span>`;
        } else {
          strChars += strThisChar;
        }
      }
      strChars += '<br/>';
    }

    this.oAscii.innerHTML = `<tr><td style="display:block;width:${this.width}px;height:${this.height}px;overflow:hidden">${strChars}</td></tr>`;
  }
}

// export { AsciiEffect };
