export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
     token:'BQC_BxNhPx9Gfw_89i1rSMMgqwTIU8T4LlJuEbGqqoCTeJkIn93z8FOZfJWwLGmdc4LVEfzUl8SRUqK6IdMHI_3YmMy34IUKE4GOblwORv2stfO55wt25scmj2zLh77pqqUPg02CnhdJoDCgxA375ysDe179SjwbyjcS2upXvDra9Ww',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token
                };
                case "SET_PLAYLISTS":
                    return{
...state,
playlists:action.playlists,
                    };
                    case 'SET_DISCOVER_WEEKLY':
                        return{
                            ...state,
                            discover_weekly:action.discover_weekly,
                        }
        default:
            return state;
    }
}
export default reducer;