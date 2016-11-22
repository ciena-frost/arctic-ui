export default function(){

  this.transition(
    this.matchSelector('.toLeft-demo'),
    this.use('toLeft', {duration:300}),
    this.reverse('toRight', {duration:300})
  );
  this.transition(
    this.toRoute('repositories'),
    this.use('toLeft')
  );
  this.transition(
    this.fromRoute('index'),
    this.use('crossFade', {duration:500}),
    this.reverse('crossFade', {duration:300})
  );
};
