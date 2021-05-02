import { Options, Vue } from "vue-property-decorator";
import BInput from "../components/b-input/b-input.vue";

@Options({
	components: {
		BInput,
	},
})
export default class ComponentsList extends Vue {}
