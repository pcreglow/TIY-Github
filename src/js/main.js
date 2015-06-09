$.getJSON('../api/github/users/octocat/octocat.json').then(function(octocat) {

    console.log(octocat.avatar_url);

    $avatar = $('img#avatar');

    $avatar.attr('src', octocat.avatar_url);

    $('[data-bind="user.login"]').text(octocat.login)

  });
