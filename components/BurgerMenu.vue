<template>
    <div class="burger-menu">
        <div>
            <p class="user-summary">
                <img class="h-8 w-8 rounded-full" 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        alt=""
                        style="box-shadow: 0px 3px 7px 0px rgba(53, 53, 53, 0.25);">
                <span class="user-name">John Doe</span>
            </p>
            <!-- <div class="separator"></div> -->
            <div class="actions-list">
                <button class="c-button is-light">
                    <i class="bi bi-box-arrow-in-left" style="margin-right: 5px;"></i>
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.user-summary {
    display: flex; 
    align-items: center; 
    justify-content: center;
}

.burger-menu {
    width: 285px; 
    height: 287px; 
    background-color: whitesmoke;
    
    position: fixed;
    
    right: 15px;
    
    border-radius: 0px 0px 20px 20px;
    
    padding-left: 0px;
    padding-top: 15px;

    box-shadow: 0px 1px 20px 0px rgba(53, 53, 53, 0.3);

    z-index: -1;
}

.separator {
    width: 100%; 
    height: 1px; 

    margin-top: 15px;
    
    background-color: rgba(0, 0, 0, 0.25);

    // box-shadow: 0px 1px 3px 0px rgba(53, 53, 53, 0.1);
}

.user-name {
    margin-left: 5px; 
    margin-top: 5px; 
    
    color: hsl(0, 1%, 42%);
    
    font-weight: 500;

    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.actions-list {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    
    flex-direction: column;

    padding-top: 28px;
}
</style>