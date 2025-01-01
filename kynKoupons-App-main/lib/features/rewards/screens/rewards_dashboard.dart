// lib/features/rewards/screens/rewards_screen.dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:kynkoupons/features/rewards/screens/activity_screen.dart';
import 'package:kynkoupons/features/rewards/screens/how_to_earn_screen.dart';
import 'package:kynkoupons/features/rewards/widgets/action_button.dart';
import 'package:kynkoupons/features/rewards/widgets/reward_items.dart';
import 'package:share_plus/share_plus.dart';

class RewardsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      appBar: AppBar(
        systemOverlayStyle: SystemUiOverlayStyle.dark,
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.info_outline, color: Colors.black87),
            onPressed: () {},
          ),
        ],
        title: Text(
          'Rewards',
          style: TextStyle(
            color: Colors.black87,
            fontSize: 18,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _ReferralCard(),
              SizedBox(height: 24),
              _ProgressCard(),
              SizedBox(height: 24),
              _ActionButtons(),
              SizedBox(height: 24),
              _RewardsSection(),
            ],
          ),
        ),
      ),
    );
  }
}

class _ReferralCard extends StatelessWidget {
  final String referralLink = 'rewards-app.com/refer/xyz';

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Refer your friend &\nearn 100 points',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            height: 1.2,
          ),
        ),
        SizedBox(height: 16),
        Container(
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            color: Colors.grey[100],
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Expanded(
                child: Text(
                  referralLink,
                  style: TextStyle(color: Colors.black54),
                ),
              ),
              IconButton(
                icon: Icon(Icons.copy, size: 20),
                onPressed: () => _copyToClipboard(context),
                padding: EdgeInsets.zero,
                constraints: BoxConstraints(),
              ),
            ],
          ),
        ),
        SizedBox(height: 12),
        ElevatedButton(
          onPressed: _shareReferralLink,
          child: Text('Share'),
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.black87,
            minimumSize: Size(double.infinity, 48),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
          ),
        ),
      ],
    );
  }

  void _copyToClipboard(BuildContext context) {
    Clipboard.setData(ClipboardData(text: referralLink));
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Referral link copied to clipboard')),
    );
  }

  void _shareReferralLink() {
    Share.share(
        'Join me on this awesome rewards app! Use my referral link: $referralLink');
  }
}

class _ProgressCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.star, color: Colors.amber),
              SizedBox(width: 8),
              Text(
                'Reward Points',
                style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 16,
                ),
              ),
            ],
          ),
          SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: Text(
                  '120/500',
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: 0.24,
              minHeight: 6,
              backgroundColor: Colors.grey[200],
              valueColor: AlwaysStoppedAnimation<Color>(
                Colors.green,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ActionButtons extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: ActionButton(
            label: 'Activity',
            icon: Icons.history,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => ActivityScreen()),
              );
            },
          ),
        ),
        SizedBox(width: 12),
        Expanded(
          child: ActionButton(
            label: 'How to Earn',
            icon: Icons.diamond_outlined,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => HowToEarnScreen()),
              );
            },
          ),
        ),
      ],
    );
  }
}

class _RewardsSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              'Rewards',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            TextButton(
              onPressed: () {},
              child: Text(
                'See All',
                style: TextStyle(color: const Color.fromARGB(214, 24, 32, 1)),
              ),
            ),
          ],
        ),
        SizedBox(height: 16),
        RewardItem(
          brand: 'Nike',
          description: '5% Off next purchase',
          points: '17/17',
          isActive: true,
        ),
        SizedBox(height: 12),
        RewardItem(
          brand: 'New Balance',
          description: 'Free shipping on \$75+',
          points: '20/50',
          isActive: false,
        ),
      ],
    );
  }
}
