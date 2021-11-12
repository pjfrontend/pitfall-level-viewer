import {getPNGimage} from './helper';

export const Obs1Log = getPNGimage(
  'iVBORw0KGgoAAAANSUhEUgAABIAAAAKsCAYAAACUFsYtAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UICAwLDJzBLzsAACAASURBVHja7N19rGTnfR/273m9L3Pv7l5S3KXI5YuoN8ri0rL1EsuOJSWRa8kO7MaWm8Symzo1nAB20aZBWyEvbYACbp0WKZomcRPELYo6jpFYdqwYluvEkSPXVazqzaJIKaREidKS1C7JvXt379yXc+ac0z9mli+SEhQo18Cynw9w7sycmTlz7jzAAOeL5/n9EgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P/fV7GuAUhIacOxAAAAAElFTkSuQmCC'
);