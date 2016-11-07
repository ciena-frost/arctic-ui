export default function(){
  this.transition(

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('crossFade', '250'),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('crossFade', '250')
  );
};
