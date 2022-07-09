<template>
  <div class="home">
    <div>
      <!-- 三级联动全局组件！ -->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor/>
      <Floor/>
      <Brand/>
    </div>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer';
import Recommend from './Recommend/Recommend';
import Rank from './Rank/Rank';
import Like from './Like/Like';
import Floor from './Floor/Floor';
import Brand from './Brand/Brand';

export default {
  name: 'Home',
  components: {
    Brand,
    Floor,
    Rank,
    Recommend,
    ListContainer,
    Like
  },
};
</script>
