<?php
  require __DIR__ . '/vendor/autoload.php';

  $options = array(
    'cluster' => 'eu',
    'encrypted' => true
  );
  $pusher = new Pusher\Pusher(
    'bf82432b1b256f712cab',
    'bad6a7f05903ff28fe8d',
    '469461',
    $options
  );

  $msg = $_GET['msg'];

  $data['message'] = $msg;
  $pusher->trigger('my-channel', 'my-event', $data);
?>
