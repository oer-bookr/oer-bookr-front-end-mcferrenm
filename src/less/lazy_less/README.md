# Lazy Animations
A big thank you goes out to [Animate.css](https://github.com/daneden/animate.css "Animate.css Github") for the start of all of these animations. 
Another thank you to [eltonmesquita](https://github.com/daneden/animate.css) for the updated keyframes.

Lazy CSS Mixins a less wrapper around the Animate.css library. Providing lazy loading and other tools from less to the animate.css library. Just include less-animate.less into your project and copy over all the source files.

## Usage

To use Lazy CSS Mixins in your project. Simply add a import for less-animate.less into your less files and when the less compiler runs the compiler will only load the required keyframs and mixins that you are using. All the others will not be included keeping your css files slim while still providing lots of functionality. 

```css  
@import 'less-animate.less';
```

Then in your css use the animations by calling the mixins. 

```css
.someClass{

    
  .animation-infinite;    /*make the animation infinite*/
  
  .animation-delay(.4s);  /*delay the aniimation for x time*/
  
  .attention-bounce(2s);    /*call the animation and set a duration for the animation to take place*/
  
  &:hover {   /*set up animations on hover*/
    
    .exit-fadeOut();   /*call animation with default duration*/
  }
  
  :active {   /*call animation on active pseudo class*/
  
    .attention-flash;   /*call animation with default duration*/
  }
  
}
```

We now include a color scheme mixin for project. If you want to include the auto color schema into your project
just add @import 'sources/color_pallet' to your imports. Then you use it like so. Just change the @color variable 
to the color of your choosing and the color scheme mixin will auto pick the other colors based on the spin 
of the color you choose. 

```css

body {
    background-color: #primaryColors[@color3];
    color: #complementaryColors[@saturate2];
    border: 1px solid #adjacentColors.leftColors[@desaturate4];
    
}
```

First you call the namespace of the colors you want to use. 
```css
#primaryColors
#adjacentColors
#triadColors
#tetradColors
#complementaryColors
```
Followed by calling the colors mixin if it has one. The three that have a mixin for them is the #adjacentColors, #triadColors
 ,and #tetradColors. 
 
 ```css
#adjacentColors.leftAdjacent
#adjacentColors.rightAdjacent
#triadColors.leftTriad
#triadColors.rightTriad
#tetradColors.leftTetrad
#tetradColors.leftTetradComplementary

```

Each one of the namespace colors and each one of the namespace.mixin colors include the @color1 through @color5.
They also come with the desaturated and saturated equal colors called @saturate1 through @saturate5, @desaturate1 through 
@desaturate5. If you find the syntax for namespace, mixin, and variable in the namespace. You can add 

```css
@import 'source/color_pallet/color_pallet_variables.less';
.primary_color_variables();
.complementary_color_variables();
.adjacent_color_variables();
.triad_color_variables();
.tetrad_color_variables();

```

or any combination of the colors you want to add. The list of variables are
```css
@primary_color1
@primary_color2
@primary_color3
@primary_color4
@primary_color5

@primary_saturate1
@primary_saturate2
@primary_saturate3
@primary_saturate4
@primary_saturate5

@primary_desaturate1
@primary_desaturate2
@primary_desaturate3
@primary_desaturate4
@primary_desaturate5
```

```css
@complementary_color1
@complementary_color2
@complementary_color3
@complementary_color4
@complementary_color5

@complementary_saturate1
@complementary_saturate2
@complementary_saturate3
@complementary_saturate4
@complementary_saturate5

@complementary_desaturate1
@complementary_desaturate2
@complementary_desaturate3
@complementary_desaturate4
@complementary_desaturate5
```

```css
@adjacent_left_color1
@adjacent_left_color2
@adjacent_left_color3
@adjacent_left_color4
@adjacent_left_color5

@adjacent_left_saturate1
@adjacent_left_saturate2
@adjacent_left_saturate3
@adjacent_left_saturate4
@adjacent_left_saturate5

@adjacent_left_desaturate1
@adjacent_left_desaturate2
@adjacent_left_desaturate3
@adjacent_left_desaturate4
@adjacent_left_desaturate5

@adjacent_right_color1
@adjacent_right_color2
@adjacent_right_color3
@adjacent_right_color4
@adjacent_right_color5

@adjacent_right_saturate1
@adjacent_right_saturate2
@adjacent_right_saturate3
@adjacent_right_saturate4
@adjacent_right_saturate5

@adjacent_right_desaturate1
@adjacent_right_desaturate2
@adjacent_right_desaturate3
@adjacent_right_desaturate4
@adjacent_right_desaturate5

```

```css
@triad_left_color1
@triad_left_color2
@triad_left_color3
@triad_left_color4
@triad_left_color5

@triad_left_saturate1
@triad_left_saturate2
@triad_left_saturate3
@triad_left_saturate4
@triad_left_saturate5

@triad_left_desaturate1
@triad_left_desaturate2
@triad_left_desaturate3
@triad_left_desaturate4
@triad_left_desaturate5

@triad_right_color1
@triad_right_color2
@triad_right_color3
@triad_right_color4
@triad_right_color5

@triad_right_saturate1
@triad_right_saturate2
@triad_right_saturate3
@triad_right_saturate4
@triad_right_saturate5

@triad_right_desaturate1
@triad_right_desaturate2
@triad_right_desaturate3
@triad_right_desaturate4
@triad_right_desaturate5

```

```css
@tetrad_left_color1
@tetrad_left_color2
@tetrad_left_color3
@tetrad_left_color4
@tetrad_left_color5

@tetrad_left_saturate1
@tetrad_left_saturate2
@tetrad_left_saturate3
@tetrad_left_saturate4
@tetrad_left_saturate5

@tetrad_left_desaturate1
@tetrad_left_desaturate2
@tetrad_left_desaturate3
@tetrad_left_desaturate4
@tetrad_left_desaturate5

@tetrad_leftComplementary_color1
@tetrad_leftComplementary_color2
@tetrad_leftComplementary_color3
@tetrad_leftComplementary_color4
@tetrad_leftComplementary_color5

@tetrad_leftComplementary_saturate1
@tetrad_leftComplementary_saturate2
@tetrad_leftComplementary_saturate3
@tetrad_leftComplementary_saturate4
@tetrad_leftComplementary_saturate5

@tetrad_leftComplementary_desaturate1
@tetrad_leftComplementary_desaturate2
@tetrad_leftComplementary_desaturate3
@tetrad_leftComplementary_desaturate4
@tetrad_leftComplementary_desaturate5

```

I have separated the mixins into 6 main categories so its easy to find the animation you are looking for via intellisense. 

#### .entrance-MIXIN-NAME
#### .exit-MIXIN-NAME
#### .attention-MIXIN-NAME
#### .aesthetic-MIXIN-NAME
#### .button-MIXIN-NAME
#### .background-MIXIN-NAME

# Mixins currently available

## Background Mixins
* .background-radial-gradient-darken-on-hover ( @colorInside, @colorOutside, @fontColor: inherit,@percentBrighten: 25%, @location: closest-corner, @x: 50%,
   @y: 50%, @color1InsidePercent: 0, @colorOutsidePercent: 100%)
* .background-radial-gradient-brighten-on-hover ( @colorInside, @colorOutside, @percentBrighten: 25%, @location: closest-corner, @x: 50%,
    @y: 50%, @color1InsidePercent: 0, @colorOutsidePercent: 100%)
* .background-radial-gradient (@colorInside, @colorOutside, @location: closest-corner, @x: 50%, @y: 50%, @color1InsidePercent: 0, @colorOutsidePercent: 100%)
* .background-linear-gradient-darken-on-hover (@color1, @color2, @darkenPercentage: 25%)
* .background-linear-gradient-glow-on-hover (@color1, @color2, @glowPercentage: 25%)
* .background-linear-gradient(@color1, @color2)
* .background-darken-on-hover(@bg-color, @percent-darken: 25%)
* .background-glow-on-hover(@bg-color, @percent-brighten: 25%)
* .background-color-change-5-colors (@color1, @color2, @color3, @color4, @color5, @duration: 8s)
* .background-color-change-4-colors (@color1, @color2, @color3, @color4, @duration: 6s)
* .background-color-change-3-colors (@color1, @color2, @color3, @duration: 4s)
* .background-color-change-2-colors (@color1, @color2, @duration: 2s)
* .background-pan-top-left(@duration: 8s)
* .background-pan-bottom-left(@duration: 8s)
* .background-pan-bottom-right (@duration: 8s)
* .background-pan-top-right (@duration: 8s)
* .background-pan-bottom-to-top (@duration: 8s)
* .background-pan-right (@duration: 8s)
* .background-pan-left(@duration: 8s)

## Button Mixins
* .button-mixni (@color: black, @bg-color: @button-success, @border-radius: @button-border-radius)
* .button-scaleOutOnHover (@bg-color: @button-success, @border-radius: @button-border-radius)
* .buttonPress(@color: black, @opacity: @default-box-shadow-opacity, @blur: @default-box-shadow-blur, @x: 0, @y: (@default-box-shadow-offsetY - 3px), @width: @default-box-shadow-width)

## Aesthetic Mixins
* .aesthetic-shadow-inset-center (@color: black, @blur: 32px, @width: 9px, @opacity: .5, @x-offset: 0, @y-offset: 0) 
* .aesthetic-shadow-inset-top (@color: black, @blur: 14px, @width: -3px, @opacity: .5, @x-offset: 0, @y-offset: 6px) 
* .aesthetic-shadow-inset-right (@color: black, @blur: 14px, @width: -3px, @opacity: .5, @x-offset: -6px, @y-offset: 0)
* .aesthetic-shadow-inset-bottom (@color: black, @blur: 14px, @width: -3px, @opacity: .5, @x-offset: 0, @y-offset: -6px)
* .aesthetic-shadow-inset-left (@color: black, @blur: 14px, @width: -3px, @opacity: .5, @x-offset: 6px, @y-offset: 0 )
* .aesthetic-shadow-inset-left-right (@color: black, @blur: 14px, @width: -3px, @opacity: .5, @x-offset: -6px, @y-offset: 0 )
* .aesthetic-shadow-inset-top-bottom (@color: black, @blur: 14px, @width: -3px, @opacity: .5, @x-offset: 0, @y-offset: -6px ) 
* .aesthetic-box-shadow (@color: black, @blur: 20px, @width: 2px,  @opacity: .5, @x-offset: @default-box-shadow-offsetX, @y-offset: @default-box-shadow-offsetY) 

## Attention Mixins 
* .attention-bounce (@duration: @defaultDuration)
* .attention-flash (@duration: @defaultDuration)
* .attention-head-shake (@duration: @defaultDuration)
* .attention-hear-beat (@duration: @defaultDuration)
* .attention-jello (@duration: @defaultDuration)
* .attention-pulse (@duration: @defaultDuration)
* .attention-rubber-band (@duration: @defaultDuration)
* .attention-shake (@duration: @defaultDuration)
* .attention-swing (@duration: @defaultDuration)
* .attention-tada (@duration: @defaultDuration)
* .attention-wobble (@duration: @defaultDuration)
* .attention-flip (@duration: @defaultDuration)

## Entrance Mixins
* .entrance-bounceIn (@duration: @defaultDuration)
* .entrance-bounceInDown (@duration: @defaultDuration)
* .entrance-bounceInLeft (@duration: @defaultDuration)
* .entrance-bounceInRight (@duration: @defaultDuration)
* .entrance-bounceInUp (@duration: @defaultDuration)
* .entrance-fadeInLeft (@duration: @defaultDuration)
* .entrance-fadeInLeftBig (@duration: @defaultDuration)
* .entrance-fadeIn (@duration: @defaultDuration)
* .entrance-fadeInDown (@duration: @defaultDuration)
* .entrance-fadeInDownBig (@duration: @defaultDuration)
* .entrance-fadeInRight (@duration: @defaultDuration)
* .entrance-fadeInRightBig (@duration: @defaultDuration)
* .entrance-fadeInUp (@duration: @defaultDuration)
* .entrance-fadeInUpBig (@duration: @defaultDuration)
* .entrance-flipInX (@duration: @defaultDuration)
* .entrance-flipInY (@duration: @defaultDuration)
* .entrance-lightSpeedIn (@duration: @defaultDuration)
* .entrance-rotateIn (@duration: @defaultDuration)
* .entrance-rotateInDownLeft (@duration: @defaultDuration)
* .entrance-rotateInDownRight (@duration: @defaultDuration)
* .entrance-rotateInUpLeft (@duration: @defaultDuration)
* .entrance-rotateInUpRight (@duration: @defaultDuration)
* .entrance-slideInDown (@duration: @defaultDuration)
* .entrance-slideInLeft (@duration: @defaultDuration)
* .entrance-slideInRight (@duration: @defaultDuration)
* .entrance-slideInUp (@duration: @defaultDuration)
* .entrance-jackInTheBox (@duration: @defaultDuration)
* .entrance-rollIn (@duration: @defaultDuration)
* .entrance-zoomIn (@duration: @defaultDuration)
* .entrance-zoomInDown (@duration: @defaultDuration)
* .entrance-zoomInLeft (@duration: @defaultDuration)
* .entrance-zoomInRight (@duration: @defaultDuration)
* .entrance-zoomInUp (@duration: @defaultDuration)


## Exit Mixins
* .exit-bounceOut (@duration: @defaultDuration)
* .exit-bounceOutDown (@duration: @defaultDuration)
* .exit-bounceOutLeft (@duration: @defaultDuration)
* .exit-bounceOutRight (@duration: @defaultDuration)
* .exit-bounceOutUp (@duration: @defaultDuration)
* .exit-fadeOut (@duration: @defaultDuration)
* .exit-fadeOutDown (@duration: @defaultDuration)
* .exit-fadeOutDownBig (@duration: @defaultDuration)
* .exit-fadeOutLeft (@duration: @defaultDuration)
* .exit-fadeOutLeftBig (@duration: @defaultDuration)
* .exit-fadeOutRight (@duration: @defaultDuration)
* .exit-fadeOutRightBig (@duration: @defaultDuration)
* .exit-fadeOutUp (@duration: @defaultDuration)
* .exit-fadeOutUpBig (@duration: @defaultDuration)
* .exit-flipOutX (@duration: @defaultDuration)
* .exit-flipOutY (@duration: @defaultDuration)
* .exit-lightSpeedOut (@duration: @defaultDuration)
* .exit-rotateOut (@duration: @defaultDuration)
* .exit-rotateOutDownLeft (@duration: @defaultDuration)
* .exit-rotateOutDownRight (@duration: @defaultDuration)
* .exit-rotateOutOutUpLeft (@duration: @defaultDuration)
* .exit-rotateOutUpRight (@duration: @defaultDuration)
* .exit-rotateOutUpRight (@duration: @defaultDuration)
* .exit-slideOutDown (@duration: @defaultDuration)
* .exit-slideOutLeft (@duration: @defaultDuration)
* .exit-slideOutRight (@duration: @defaultDuration)
* .exit-slideOutUp (@duration: @defaultDuration)
* .exit-hinge (@duration: @defaultDuration)
* .exit-rollOut (@duration: @defaultDuration)
* .exit-zoomOut (@duration: @defaultDuration)
* .exit-zoomOutDown (@duration: @defaultDuration)
* .exit-zoomOut (@duration: @defaultDuration)
* .exit-zoomOutLeft (@duration: @defaultDuration)
* .exit-zoomOutRight (@duration: @defaultDuration)
* .exit-zoomOutUp (@duration: @defaultDuration)

## Documentation. 

## Default Variables
All default variables are located in base.less in the source folder. They can be overridden in your less files as long as 
your less files come after the @import 'less-animate.less'; 
### @defaultDuration: 1s;
### @default-box-shadow-offsetX: 0;
### @default-box-shadow-offsetY: 0;
### @button-success: lightgreen;   Light green color.
### @button-danger: #f59090;  Light red color.
### @button-info: #537ee8;   Light blue color.

### .animation-infinite ();
  #### This sets the animation to run continuously.

### .animation-delay(@duration : 1s);
  #### This mixin will take one argument the delay duration. Either in s or ms. Must include the s or the ms after the number. Or leave blank for the default 1s delay. 





